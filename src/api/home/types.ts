export interface IHomePageService {
  getForums(): IRawForum[];
}

export interface IRawForum {
  name: string;
  id: string;
  subForums?: IRawSubForum[];
}

interface IRawSubForum {
  name: string;
  id: string;
  moderators: string[];
  messagesCount: number;
  lastTopic: IRawTopicInfo;
}

interface IRawTopicInfo {
  name: string;
  id: string;
  avatarUrl?: string;
  authorName: string;
  date: string;
}
