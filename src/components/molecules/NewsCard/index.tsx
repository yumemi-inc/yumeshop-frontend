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
import React, { useMemo, VFC } from 'react';
import NextLink from 'next/link';
import { dateToYYYYMMDD } from 'src/libs/util/dateToYYYYMMDD';

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

export const NewsCard: VFC<NewsCard> = ({
  title,
  date,
  tags,
  href,
  ...props
}) => {
  const dateStr = useMemo(() => dateToYYYYMMDD(date), [date]);
  return (
    <LinkBox borderRadius={8} shadow="base" p={2} {...props}>
      <Stack>
        <HStack>
          <Heading size="sm">{dateStr}</Heading>
          <HStack>
            {tags.map((tag) => (
              <Tag
                key={tag.key}
                color="White"
                backgroundColor={tag.color}
                borderRadius="none"
                fontSize="md"
              >
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
};
