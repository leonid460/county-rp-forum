import { IRawForum } from '@/api/home/types';
import { IForum } from '@/modules/Main/ForumCard/types';

export const HomePageAdapters = {
  forums: (forums: IRawForum[]): IForum[] => forums.map(deserializeDateInForum)
};

function deserializeDateInForum(forum: IRawForum) {
  const subForums = forum.subForums.map((subForum) => {
    const deserializedDate = new Date(subForum.lastTopic.date);

    const lastTopic = {
      ...subForum.lastTopic,
      date: deserializedDate
    };

    return {
      ...subForum,
      lastTopic
    };
  });

  return {
    ...forum,
    subForums
  };
}
