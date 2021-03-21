import { IRawAuthorInfo } from './types';
import { ITopicAuthorInfo } from '@/modules/Topic/Header/types';

export const TopicPageAdaptors = {
  authorInfo: (rawInfo: IRawAuthorInfo): ITopicAuthorInfo => ({
    ...rawInfo,
    creationDate: new Date(rawInfo.creationDate)
  })
};
