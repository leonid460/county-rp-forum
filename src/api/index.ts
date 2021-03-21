import { HomePageMocks } from './home/HomePageMocks';
import { ForumPageMocks } from './forum/ForumPageMocks';
import { TopicPageMocks } from './topic/ForumPageMocks';
import { IServicesContainer } from './types';

export const ServicesContainer: IServicesContainer = {
  HomePageService: HomePageMocks,
  ForumPageService: ForumPageMocks,
  TopicPageService: TopicPageMocks
};
