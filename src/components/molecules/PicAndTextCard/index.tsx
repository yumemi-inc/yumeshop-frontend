import { Box, Image, Text, BoxProps, Center } from '@chakra-ui/react';
import React, { VFC } from 'react';

interface PicAndTextCardProps extends BoxProps {
  title: string;
  thumbnailUrl: string;
}

/**
 * 画像とテキストを含むカード
 */
export const PicAndTextCard: VFC<PicAndTextCardProps> = ({
  title,
  thumbnailUrl,
  ...props
}) => (
  <Box borderRadius={8} shadow="base" overflow="hidden" {...props}>
    <Center>
      <Image src={thumbnailUrl} alt={title} />
    </Center>
    <Box p={2}>
      <Text fontSize="sm">{title}</Text>
    </Box>
  </Box>
);
