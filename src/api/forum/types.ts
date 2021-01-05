export interface IForumPageService {
  getForumInfo(id: string): Promise<IRawForumInfo>;
}

export interface IRawForumInfo {
  name: string;
  id: string;
  topics: IRawTopicInfo[];
}

export interface IRawTopicInfo {
  name: string;
  id: string;
  author: string;
  creationDate: string;
  repliesCount: number;
  viewsCount: number;
  isClosed: boolean;
  lastMessageInfo?: IRawLastMessageInfo;
}

interface IRawLastMessageInfo {
  author: string;
  date: string;
}
