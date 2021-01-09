import * as routes from '@/routes';
import { ServicesContainer } from '@/api';
import { ILocation, ILocationsMapItemValue } from './types';

async function forumNameResolver(id: string) {
  const forumInfo = await ServicesContainer.ForumPageService.getForumInfo(id);

  if (forumInfo) {
    return forumInfo.name;
  }

  return 'Форум';
}

async function topicNameResolver(id: string) {
  return new Promise<string>((resolve) => resolve('Topic' + id));
}

export const locations: ILocation[] = [
  { route: routes.mainSite, name: 'Главная' },
  { route: routes.root, name: 'Форумы' },
  { route: `${routes.root}forum/:id`, dynamic: true, nameResolver: forumNameResolver },
  { route: `${routes.root}forum/:id/topic/:id`, dynamic: true, nameResolver: topicNameResolver }
];

export const locationsMap = new Map<string, ILocationsMapItemValue>(
  locations.map((locationItem) => {
    const { route, ...rest } = locationItem;

    return [route, rest];
  })
);

export const mainLocations = [locations[0], locations[1]];
