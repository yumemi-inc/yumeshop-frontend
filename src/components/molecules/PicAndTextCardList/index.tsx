import { ComponentProps, VFC } from 'react';
import { PicAndTextCard } from 'src/components/molecules/PicAndTextCard';
import { Flex } from '@chakra-ui/react';

interface Card extends ComponentProps<typeof PicAndTextCard> {
  key: string;
}

interface PicAndTextCardListProps {
  cards: Card[];
  cardWidth?: Card['width'];
}

export const PicAndTextCardList: VFC<PicAndTextCardListProps> = ({
  cards,
  cardWidth,
}) => (
  <Flex gap={4} overflowX="auto" p={2}>
    {cards.map((card) => (
      <PicAndTextCard width={cardWidth} flexShrink={0} {...card} />
    ))}
  </Flex>
);
