import { IRawTopicInfo } from './types';
import { ITopic } from '@/modules/Forum/TopicsList/types';

export const ForumPageAdaptors = {
  topics: (rawTopics: IRawTopicInfo[]): ITopic[] => rawTopics.map(deserializeDateInTopic)
};

function deserializeDateInTopic(topic: IRawTopicInfo): ITopic {
  const adaptedTopicInfo = {
    name: topic.name,
    id: topic.id,
    author: topic.author,
    creationDate: new Date(topic.creationDate),
    repliesCount: topic.repliesCount,
    isClosed: topic.isClosed,
    viewsCount: topic.viewsCount,
    tags: topic.tags
  };

  if (topic.lastMessageInfo) {
    return {
      ...adaptedTopicInfo,
      lastMessageInfo: {
        author: topic.lastMessageInfo.author,
        date: new Date(topic.lastMessageInfo.date)
      }
    };
  }

  return adaptedTopicInfo;
}
