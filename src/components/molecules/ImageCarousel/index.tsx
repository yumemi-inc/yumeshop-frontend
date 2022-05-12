import { VFC } from 'react';
import { Box, BoxProps, Image, Link, Center } from '@chakra-ui/react';
import Slick, { Settings } from 'react-slick';
import NextLink from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Item {
  key: string;
  alt: string;
  imageUrl: string;
  href: string;
}

interface ImageCarouselProps extends BoxProps {
  items: Item[];
}

const setting: Settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '25%',
};

export const ImageCarousel: VFC<ImageCarouselProps> = ({ items, ...props }) => (
  //
  <Box {...props}>
    <Slick {...setting}>
      {items.map((item) => (
        <Box key={item.key} px={4}>
          <NextLink href={item.href} passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link>
              <Center>
                <Image src={item.imageUrl} alt={item.alt} />
              </Center>
            </Link>
          </NextLink>
        </Box>
      ))}
    </Slick>
  </Box>
);
