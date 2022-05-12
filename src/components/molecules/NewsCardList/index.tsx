import { ComponentProps, VFC } from 'react';
import { NewsCard } from 'src/components/molecules/NewsCard';
import { Stack } from '@chakra-ui/react';

interface Card extends ComponentProps<typeof NewsCard> {
  key: string;
}

interface NewsCardProps {
  cards: Card[];
}

export const NewsCardList: VFC<NewsCardProps> = ({ cards }) => (
  <Stack>
    {cards.map((card) => (
      <NewsCard {...card} />
    ))}
  </Stack>
);
