import { VFC } from 'react';
import {
  PicAndTextCard,
  PicAndTextCardProps,
} from 'src/components/molecules/PicAndTextCard';
import { BoxProps, Flex } from '@chakra-ui/react';

export interface PicAndTextCardListItem extends PicAndTextCardProps {
  key: string;
}

export interface PicAndTextCardListProps {
  cards: PicAndTextCardListItem[];
  cardStyle?: BoxProps;
}

export const PicAndTextCardList: VFC<PicAndTextCardListProps> = ({
  cards,
  cardStyle,
}) => (
  <Flex
    gap={4}
    overflowX="auto"
    wrap={{
      base: 'nowrap',
      lg: 'wrap',
    }}
  >
    {cards.map((card) => (
      <PicAndTextCard flexShrink={0} {...card} {...cardStyle} />
    ))}
  </Flex>
);
