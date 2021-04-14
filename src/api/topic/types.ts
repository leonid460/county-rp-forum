export interface IRawTopicInfo {
  id: string;
  name: string;
  authorInfo: IRawAuthorInfo;
  tags?: string[];
  page: number;
  pagesAmount: number;
}

export interface IRawAuthorInfo {
  name: string;
  creationDate: string;
  avatarUrl?: string;
}

export interface ITopicPageService {
  getTopicInfo: (topicId: string, page: number) => Promise<IRawTopicInfo>;
}
