export interface IForum {
  name: string;
  id: string;
  subForums?: ISubForumInfo[];
}

export interface ISubForumInfo {
  name: string;
  id: string;
  moderators: string[];
  messagesCount?: number;
  lastTopic?: ILastTopicInfo;
}

interface ILastTopicInfo {
  name: string;
  id: string;
  avatarUrl?: string;
  authorName: string;
  date: Date;
}
