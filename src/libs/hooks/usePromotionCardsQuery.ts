import { useAspidaQuery } from '@aspida/react-query';
import { useMemo } from 'react';
import assert from 'assert';
import { CarouselItemProps } from 'src/components/molecules/ImageCarousel';
import { client } from '../aspida/client';

export const usePromotionCardsQuery = () => {
  const { data } = useAspidaQuery(client.promotions);
  assert(data); // suspenseなのでundefinedにはならない
  return useMemo<CarouselItemProps[]>(
    () =>
      data.map((item) => ({
        key: item.id,
        alt: item.title,
        imageUrl: item.image,
        href: item.link,
      })),
    [data],
  );
};
