import {
  BoxProps,
  Heading,
  HStack,
  Stack,
  Text,
  Tag,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React, { VFC } from 'react';
import NextLink from 'next/link';

interface Tag {
  key: string;
  name: string;
  color: string;
}

interface NewsCard extends BoxProps {
  title: string;
  date: Date;
  tags: Tag[];
  href: string;
}

export const NewsCard: VFC<NewsCard> = ({ title, tags, href, ...props }) => (
  <LinkBox borderRadius={8} shadow="base" p={2} {...props}>
    <Stack>
      <HStack>
        <Heading size="sm">2022/05/11</Heading>
        <HStack>
          {tags.map((tag) => (
            <Tag key={tag.key} backgroundColor={tag.color} borderRadius="none">
              {tag.name}
            </Tag>
          ))}
        </HStack>
      </HStack>
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Text noOfLines={2}>{title}</Text>
        </LinkOverlay>
      </NextLink>
    </Stack>
  </LinkBox>
);
