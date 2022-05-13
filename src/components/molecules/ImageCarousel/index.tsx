import { VFC } from 'react';
import { Box, BoxProps, Image, Link, Center } from '@chakra-ui/react';
import Slick, { Settings } from 'react-slick';
import NextLink from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CarouselItemProps {
  key: string;
  alt: string;
  imageUrl: string;
  href: string;
}

interface ImageCarouselProps extends BoxProps {
  items: CarouselItemProps[];
}

// breakpointは768以下
const commonSetting: Settings = {
  dots: true,
  dotsClass: 'slick-dots image-carousel-dots',
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  arrows: false,
  centerPadding: '0px',
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 5000,
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
    <style global jsx>{`
      .image-carousel-dots {
        bottom: 8px;
      }
      .image-carousel-dots li {
        margin: 0;
      }
      .image-carousel-dots li button {
        width: 15px;
        height: 15px;
        padding: 0;
      }
      .image-carousel-dots li.slick-active button:before {
        font-size: 15px;
        color: black;
        opacity: 1;
      }
      .image-carousel-dots li button:before {
        font-size: 15px;
        color: white;
        opacity: 1;
      }
    `}</style>
  </Box>
);
