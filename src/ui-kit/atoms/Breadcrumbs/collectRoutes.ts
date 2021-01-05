import { ILocationsMapItemValue } from '@/locations/types';
import { pathJoin } from '@/utils/pathJoin';

export async function collectRoutes(
  path: string,
  locationsMap: Map<string, ILocationsMapItemValue>
) {
  const locationsEntries: Array<{ name?: string; route: string }> = [];
  const nameResolvers: (() => Promise<string>)[] = [];
  let actualPath = '';
  let pathWithLabels = '';

  getPathTokens(path).forEach((token) => {
    actualPath = pathJoin([actualPath, token]);

    if (locationsMap.has(pathJoin([pathWithLabels, token]))) {
      pathWithLabels = pathJoin([pathWithLabels, token]);
      const location = locationsMap.get(pathWithLabels);

      location &&
        locationsEntries.push({
          route: actualPath,
          name: location.name
        });
    } else if (locationsMap.has(pathJoin([pathWithLabels, token, ':id']))) {
      pathWithLabels = pathJoin([pathWithLabels, token, ':id']);
    } else if (locationsMap.has(pathWithLabels)) {
      const location = locationsMap.get(pathWithLabels);
      nameResolvers.push(() => location.nameResolver(token));

      locationsEntries.push({
        route: actualPath
      });
    }
  });

  const names: string[] = await Promise.all(nameResolvers.map((resolver) => resolver()));
  const reverseNamesList = names.reverse();

  return locationsEntries.map((entry) => {
    if (entry.name) {
      return entry;
    } else {
      return {
        route: entry.route,
        name: reverseNamesList.pop() || ''
      };
    }
  });
}

function getPathTokens(path: string) {
  if (path === '/') {
    return ['/'];
  }
  return ['/', ...removeSlashesFromHeadAndTail(path).split('/')];
}

function removeSlashesFromHeadAndTail(path: string) {
  let changedPath = path;

  if (path[0] === '/') {
    changedPath = changedPath.slice(1);
  }

  if (path[path.length - 1] === '/') {
    changedPath = changedPath.slice(0, -1);
  }

  return changedPath;
}
