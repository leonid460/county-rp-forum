export interface ISubForumInfo {
  name: string;
  moderators: string[];
  messagesCount?: number;
  viewableTopic?: ILastTopicInfo;
}

interface ILastTopicInfo {
  name: string;
  avatarUrl?: string;
  authorName: string;
  date: Date;
}

export interface IForum {
  name: string;
  subForums?: ISubForumInfo[];
}
