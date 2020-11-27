import { IRawForum } from '@/api/home/types';
import { IForum } from '@/modules/Main/ForumCard/types';

export const HomePageAdapters = {
  forums: (forums: IRawForum[]): IForum[] => forums.map(deserializeDateInForum)
};

function deserializeDateInForum(forum: IRawForum) {
  const subForums = forum.subForums.map((subForum) => {
    const deserializedDate = new Date(subForum.viewableTopic.date);
    const viewableTopic = {
      ...subForum.viewableTopic,
      date: deserializedDate
    };

    return {
      ...subForum,
      viewableTopic
    };
  });

  return {
    ...forum,
    subForums
  };
}
