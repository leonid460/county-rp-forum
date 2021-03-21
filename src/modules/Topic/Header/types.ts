export interface ITopicAuthorInfo {
  name: string;
  creationDate: Date;
  avatarUrl?: string;
}

export interface ITopicHeaderProps {
  title: string;
  tags: string[];
  authorInfo: ITopicAuthorInfo;
}
