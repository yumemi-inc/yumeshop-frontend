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

// breakpointは768以下
const commonSetting: Settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  arrows: false,
  centerPadding: '0px',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
      },
    },
  ],
};

export const ImageCarousel: VFC<ImageCarouselProps> = ({ items, ...props }) => (
  <Box {...props}>
    <Slick {...commonSetting}>
      {items.map((item) => (
        <Box
          key={item.key}
          px={{
            base: 0,
            md: 4,
          }}
          maxWidth="600px"
        >
          <NextLink href={item.href} passHref>
            {/* eslintではhref Propの無いリンク系タグにwarnが出るが、ここではNextLinkから渡されるのでdisable */}
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
