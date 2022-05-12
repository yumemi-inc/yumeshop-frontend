import { VFC } from 'react';
import { BoxProps } from '@chakra-ui/react';

interface Item {
  key: string;
  alt: string;
  imageUrl: string;
  href: string;
}

interface ImageCarouselProps extends BoxProps {
  items: Item[];
}

export const ImageCarousel: VFC<ImageCarouselProps> = () => (
  //
  <Box />
);
