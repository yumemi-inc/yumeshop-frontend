import { VFC } from 'react';
import {
  PicAndTextCard,
  PicAndTextCardProps,
} from 'src/components/molecules/PicAndTextCard';
import { BoxProps, Flex } from '@chakra-ui/react';

export interface PicAndTextCardListItem extends PicAndTextCardProps {
  key: string;
}

interface PicAndTextCardListProps {
  cards: (PicAndTextCardListItem & BoxProps)[];
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
