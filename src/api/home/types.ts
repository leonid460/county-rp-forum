export interface IHomePageService {
  getForums(): IRawForum[];
}

export interface IRawForum {
  name: string;
  subForums?: IRawSubForum[];
}

interface IRawSubForum {
  name: string;
  moderators: string[];
  messagesCount: number;
  viewableTopic: IRawTopicInfo;
}

interface IRawTopicInfo {
  name: string;
  avatarUrl?: string;
  authorName: string;
  date: string;
}
