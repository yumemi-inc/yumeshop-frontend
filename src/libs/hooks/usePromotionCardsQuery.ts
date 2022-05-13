
import { PicAndTextCardListItem } from 'src/components/molecules/PicAndTextCardList';
import { useAspidaQuery } from '@aspida/react-query';
import { useMemo } from 'react';
import assert from 'assert';
import { client } from '../aspida/client';

export const usePromotionCardsQuery = (href: string) => {
  const { data } = useAspidaQuery(client.categories);
  assert(data); // suspenseなのでundefinedにはならない
  return useMemo<PicAndTextCardListItem[]>(
    () =>
      data.map((item) => ({
        key: item.id,
        title: item.name,
        thumbnailUrl: item.thumbnail,
        href,
      })),
    [data, href],
  );
};
