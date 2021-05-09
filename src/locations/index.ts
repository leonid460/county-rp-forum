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
  const topicInfo = await ServicesContainer.TopicPageService.getTopicInfo(id, 1);

  if (topicInfo) {
    return topicInfo.name;
  }
}

export const locations: ILocation[] = [
  { route: routes.root, name: 'Главная' },
  { route: routes.registration, name: 'Регистрация' },
  { route: routes.rulesOfForum, name: 'Правила форума' },
  { route: routes.testOfRules, name: 'Тест на знание правил' },
  { route: `${routes.root}forum/:id`, dynamic: true, nameResolver: forumNameResolver },
  { route: `${routes.root}forum/:id/topic/:id`, dynamic: true, nameResolver: topicNameResolver }
];

export const locationsMap = new Map<string, ILocationsMapItemValue>(
  locations.map((locationItem) => {
    const { route, ...rest } = locationItem;

    return [route, rest];
  })
);

export const mainLocations = [locations[0]];
