import { IHomePageService, IRawForum } from './types';

const forums: IRawForum[] = [
  {
    name: 'Форум 1',
    subForums: [
      {
        name: 'Форум 3',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        viewableTopic: { name: 'Topic', authorName: 'User', date: new Date().toDateString() }
      },
      {
        name: 'Форум 4',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        viewableTopic: { name: 'Topic', authorName: 'User', date: new Date().toDateString() }
      }
    ]
  },
  {
    name: 'Форум 2',
    subForums: [
      {
        name: 'Форум 5',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        viewableTopic: { name: 'Topic', authorName: 'User', date: new Date().toDateString() }
      },
      {
        name: 'Форум 6',
        moderators: ['test1', 'test2'],
        messagesCount: 666,
        viewableTopic: { name: 'Topic', authorName: 'User', date: new Date().toDateString() }
      }
    ]
  }
];

export const HomePageMocks: IHomePageService = {
  getForums: (): IRawForum[] => forums
};
