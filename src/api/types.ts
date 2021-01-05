import { IHomePageService } from '@/api/home/types';
import { IForumPageService } from '@/api/forum/types';

export interface IServicesContainer {
  HomePageService: IHomePageService;
  ForumPageService: IForumPageService;
}
