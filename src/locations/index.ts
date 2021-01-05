import * as routes from '@/routes';
import { ServicesContainer } from '@/api';
import { ILocation, ILocationsMapItemValue } from './types';

async function forumNameResolver(id: string) {
  return (await ServicesContainer.ForumPageService.getForumInfo(id)).name || 'Форум';
}

export const locations: ILocation[] = [
  { route: routes.mainSite, name: 'Главная' },
  { route: routes.root, name: 'Форумы' },
  { route: `${routes.root}forum/:id`, dynamic: true, nameResolver: forumNameResolver }
];

export const locationsMap = new Map<string, ILocationsMapItemValue>(
  locations.map((locationItem) => {
    const { route, ...rest } = locationItem;

    return [route, rest];
  })
);

export const mainLocations = [locations[0], locations[1]];
