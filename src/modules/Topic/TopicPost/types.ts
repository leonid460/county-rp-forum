export interface IAuthorBlockProps {
  avatarUrl?: string;
  username: string;
  groupName: string;
}

export interface IQuoteProps {
  author: string;
  text: string;
  quotedPostLink: string;
}

export interface ITopicPostProps {
  username: string;
  groupName: string;
  avatarUrl: string;
  date: Date;
  quoteAuthor: string;
  quoteSourceLink: string;
  quoteText: string;
  postText: string;
}
