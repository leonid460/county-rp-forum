import { pathJoin } from '@/utils/pathJoin';

export function getNestedRoutes(pathname: string) {
  const routes = [];

  pathname.split('/').reduce((path, route) => {
    routes.push(path || '/');

    return pathJoin([path, route]);
  });

  return routes;
}
