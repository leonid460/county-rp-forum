import { IRawForumInfo, IForumPageService } from './types';

const forums: IRawForumInfo[] = [
  {
    name: 'Форум 3',
    id: 'forum-3',
    topics: [
      {
        name: 'Example Topic 31',
        id: 'ex-topic-31',
        author: 'exampleUser12345678910sadasdasda',
        creationDate: new Date().toDateString(),
        repliesCount: 21,
        isClosed: true,
        viewsCount: 123456789,
        lastMessageInfo: {
          author: 'exampleUser12345678910sadasdasda',
          date: new Date().toDateString()
        },
        tags: ['tag-1', 'tag-2']
      },
      {
        name: 'Example Topic 32',
        id: 'ex-topic-32',
        author: 'exampleUser12345678910sadasdasda',
        creationDate: new Date().toDateString(),
        repliesCount: 23,
        isClosed: false,
        viewsCount: 12345,
        tags: ['tag-1']
      }
    ]
  },
  {
    name: 'Форум 4',
    id: 'forum-4',
    topics: [
      {
        name: 'Example Topic 41',
        id: 'ex-topic-41',
        author: 'exampleUser12345678910sadasdasda',
        creationDate: new Date().toDateString(),
        repliesCount: 23,
        isClosed: true,
        viewsCount: 12345,
        lastMessageInfo: {
          author: 'exampleUser12345678910sadasdasda',
          date: new Date().toDateString()
        },
        tags: []
      },
      {
        name: 'Example Topic 42',
        id: 'ex-topic-42',
        author: 'exampleUser12345678910sadasdasda',
        creationDate: new Date().toDateString(),
        repliesCount: 23,
        isClosed: true,
        viewsCount: 12345,
        tags: []
      }
    ]
  }
];

export const ForumPageMocks: IForumPageService = {
  getForumInfo: (id: string) =>
    new Promise((resolve) => resolve(forums.find((forum) => forum.id === id)))
};
