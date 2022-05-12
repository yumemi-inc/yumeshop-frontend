import { ComponentProps, VFC } from 'react';
import { PicAndTextCard } from 'src/components/molecules/PicAndTextCard';
import { Flex } from '@chakra-ui/react';

interface Card extends ComponentProps<typeof PicAndTextCard> {
  key: string;
}

interface PicAndTextCardListProps {
  cards: Card[];
}

export const PicAndTextCardList: VFC<PicAndTextCardListProps> = ({ cards }) => (
  <Flex
    gap={4}
    overflowX="auto"
    p={2}
    wrap={{
      base: 'nowrap',
      lg: 'wrap',
    }}
  >
    {cards.map((card) => (
      <PicAndTextCard flexShrink={0} {...card} />
    ))}
  </Flex>
);
