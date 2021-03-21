export interface IRawTopicInfo {
  id: string;
  name: string;
  authorInfo: IRawAuthorInfo;
  tags?: string[];
}

export interface IRawAuthorInfo {
  name: string;
  creationDate: string;
  avatarUrl?: string;
}

export interface ITopicPageService {
  getTopicInfo: (topicId: string) => Promise<IRawTopicInfo>;
}
