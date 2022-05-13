import { useAspidaQuery } from '@aspida/react-query';
import { useMemo } from 'react';
import assert from 'assert';
import { NewsCardListItem } from 'src/components/molecules/NewsCardList';
import { client } from '../aspida/client';

export const useInformationCardsQuery = () => {
  const { data } = useAspidaQuery(client.informations);
  assert(data); // suspenseなのでundefinedにはならない
  return useMemo<NewsCardListItem[]>(
    () =>
      data.map((item) => ({
        key: item.id,
        title: item.title,
        tags: item.tags.map((tagItem) => ({
          key: tagItem.id,
          name: tagItem.name,
          backGroundColor: tagItem.color,
        })),
        date: new Date(item.announced_at),
      })),
    [data],
  );
};
