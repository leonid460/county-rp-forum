export interface ITopicListProps {
  forumId: string;
  topics: ITopic[];
}

export interface ITopic {
  name: string;
  id: string;
  author: string;
  creationDate: Date;
  repliesCount: number;
  viewsCount: number;
  isClosed: boolean;
  lastMessageInfo?: ILastMessageInfo;
}

interface ILastMessageInfo {
  author: string;
  date: Date;
}
