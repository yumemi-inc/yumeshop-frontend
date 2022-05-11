import { Box, Image, Text, BoxProps } from '@chakra-ui/react';
import React, { VFC } from 'react';

interface PicAndTextCardProps extends BoxProps {
  title: string;
  thumbnailUrl: string;
}

/**
 * 画像とテキストを含むカード
 * @param title
 * @param thumbnailUrl
 * @param width
 */
export const PicAndTextCard: VFC<PicAndTextCardProps> = ({
  title,
  thumbnailUrl,
  width,
}) => (
  <Box borderRadius={8} shadow="base" overflow="hidden" width={width}>
    <Image src={thumbnailUrl} alt={title} />
    <Box p={2}>
      <Text fontSize="sm">{title}</Text>
    </Box>
  </Box>
);
