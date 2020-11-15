import * as routes from '@/routes';

export const locations = {
  main: { route: routes.mainSite, name: 'Главная' },
  forum: { route: routes.root, name: 'Форум' }
};

export const mainLocations = [locations.main, locations.forum];
