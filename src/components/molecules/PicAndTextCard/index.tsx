import {
  Box,
  Image,
  Text,
  BoxProps,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React, { VFC } from 'react';
import NextLink from 'next/link';

export interface PicAndTextCardProps {
  title: string;
  thumbnailUrl: string;
  href: string;
}

/**
 * 画像とテキストを含むカード
 */
export const PicAndTextCard: VFC<PicAndTextCardProps & BoxProps> = ({
  title,
  thumbnailUrl,
  href,
  ...props
}) => (
  <LinkBox borderRadius={8} shadow="base" overflow="hidden" {...props}>
    <Center>
      <Image src={thumbnailUrl} alt={title} />
    </Center>
    <Box p={2}>
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Text fontSize="sm">{title}</Text>
        </LinkOverlay>
      </NextLink>
    </Box>
  </LinkBox>
);
