import { IRawTopicInfo, ITopicPageService } from './types';

const topics: IRawTopicInfo[] = [
  {
    id: 'ex-topic-31',
    name: 'Example Topic Topic Topic Topic Topic Topic Topic 31',
    authorInfo: {
      name: 'exampleUser12345678910sadasdasda',
      creationDate: new Date().toDateString()
    },
    tags: ['tag-1', 'tag-2'],
    page: 1,
    pagesAmount: 10
  },
  {
    id: 'ex-topic-32',
    name: 'Example Topic Topic Topic Topic Topic Topic Topic 32',
    authorInfo: {
      name: 'exampleUser12345678910sadasdasda',
      creationDate: new Date().toDateString()
    },
    tags: ['tag-1'],
    page: 1,
    pagesAmount: 1
  },
  {
    id: 'ex-topic-41',
    name: 'Example Topic 41',
    authorInfo: {
      name: 'exampleUser12345678910sadasdasda',
      creationDate: new Date().toDateString()
    },
    tags: [],
    page: 1,
    pagesAmount: 4
  },
  {
    id: 'ex-topic-42',
    name: 'Example Topic 42',
    authorInfo: {
      name: 'exampleUser12345678910sadasdasda',
      creationDate: new Date().toDateString()
    },
    tags: [],
    page: 1,
    pagesAmount: 2
  }
];

export const TopicPageMocks: ITopicPageService = {
  getTopicInfo: (topicId, page) => {
    const topic = topics.find((topic) => topic.id === topicId);

    return new Promise((resolve) =>
      resolve({
        ...topic,
        page
      })
    );
  }
};
