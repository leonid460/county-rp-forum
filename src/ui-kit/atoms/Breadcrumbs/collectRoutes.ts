import { ILocationsMapItemValue } from '@/locations/types';
import { pathJoin } from '@/utils/pathJoin';

export async function collectRoutes(
  path: string,
  locationsMap: Map<string, ILocationsMapItemValue>
) {
  const { locationsEntries, nameResolvers } = getLocationEntries(path, locationsMap);
  const resolvedNames: string[] = await Promise.all(nameResolvers.map((resolver) => resolver()));
  const reverseNamesList = resolvedNames.reverse();

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

function getLocationEntries(path: string, locationsMap: Map<string, ILocationsMapItemValue>) {
  const locationsEntries: Array<{ name?: string; route: string }> = [];
  let actualPath = '';
  let pathWithLabels = '';
  const nameResolvers: (() => Promise<string>)[] = [];

  getPathTokens(path).forEach((token) => {
    actualPath = pathJoin([actualPath, token]);
    const newPathForStaticRoute = pathJoin([pathWithLabels, token]);
    const newPathForDynamicRoute = pathJoin([pathWithLabels, token, ':id']);

    const isStaticLocation = !!locationsMap.has(newPathForStaticRoute);
    const isDynamicLocation = !!locationsMap.has(newPathForDynamicRoute);
    const isPrevLocationDynamic = !!locationsMap.has(pathWithLabels);

    if (isStaticLocation) {
      pathWithLabels = newPathForStaticRoute;
      const location = locationsMap.get(pathWithLabels);

      location &&
        locationsEntries.push({
          route: actualPath,
          name: location.name
        });
    } else if (isDynamicLocation) {
      pathWithLabels = newPathForDynamicRoute;
    } else if (isPrevLocationDynamic) {
      const location = locationsMap.get(pathWithLabels);
      nameResolvers.push(() => location.nameResolver(token));

      locationsEntries.push({
        route: actualPath
      });
    }
  });

  return {
    locationsEntries,
    nameResolvers
  };
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
