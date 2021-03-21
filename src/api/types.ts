import { IHomePageService } from '@/api/home/types';
import { IForumPageService } from '@/api/forum/types';
import { ITopicPageService } from '@/api/topic/types';

export interface IServicesContainer {
  HomePageService: IHomePageService;
  ForumPageService: IForumPageService;
  TopicPageService: ITopicPageService;
}
