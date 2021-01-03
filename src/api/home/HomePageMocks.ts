import { IHomePageService, IRawForum } from './types';

const forums: IRawForum[] = [
  {
    name: 'Форум 1',
    id: 'forum-1',
    subForums: [
      {
        name: 'Форум 3',
        id: 'forum-3',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        lastTopic: {
          name: 'Topic 31',
          id: 'forum-3-topic-1',
          authorName: 'User1',
          date: new Date().toDateString()
        }
      },
      {
        name: 'Форум 4',
        id: 'forum-4',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        lastTopic: {
          name: 'Topic 41',
          id: 'forum-4-topic-1',
          authorName: 'User12',
          date: new Date().toDateString()
        }
      }
    ]
  }
];

export const HomePageMocks: IHomePageService = {
  getForums: (): IRawForum[] => forums
};
