import { VFC } from 'react';
import { NewsCard, NewsCardProps } from 'src/components/molecules/NewsCard';
import { BoxProps, Stack } from '@chakra-ui/react';

export interface NewsCardListItem extends NewsCardProps {
  key: string;
}

export interface NewsCardListProps {
  cards: NewsCardListItem[];
  cardStyle?: BoxProps;
}

export const NewsCardList: VFC<NewsCardListProps> = ({ cards, cardStyle }) => (
  <Stack>
    {cards.map((card) => (
      <NewsCard {...card} {...cardStyle} />
    ))}
  </Stack>
);
