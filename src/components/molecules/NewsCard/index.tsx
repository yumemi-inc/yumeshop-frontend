import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Stack,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React, { ComponentProps, useMemo, VFC } from 'react';
import NextLink from 'next/link';
import { dateToYYYYMMDD } from 'src/libs/util/dateToYYYYMMDD';
import { ShopTag } from '../../atoms/ShopTag';

interface NewsCard extends BoxProps {
  title: string;
  date: Date;
  tags: ComponentProps<typeof ShopTag>[];
  href?: string;
}

export const NewsCard: VFC<NewsCard> = ({
  title,
  date,
  tags,
  href,
  ...props
}) => {
  const dateStr = useMemo(() => dateToYYYYMMDD(date), [date]);

  const dateAndTags = (
    <HStack>
      <Heading size="sm">{dateStr}</Heading>
      <HStack>
        {tags.map((tag) => (
          <ShopTag key={`${tag.name}-${tag.backGroundColor}`} {...tag} />
        ))}
      </HStack>
    </HStack>
  );

  if (href === undefined) {
    return (
      <Box borderRadius={8} shadow="base" p={2} {...props}>
        <Stack>
          {dateAndTags}
          <Text noOfLines={2}>{title}</Text>
        </Stack>
      </Box>
    );
  }

  return (
    <LinkBox borderRadius={8} shadow="base" p={2} {...props}>
      <Stack>
        {dateAndTags}
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text noOfLines={2}>{title}</Text>
          </LinkOverlay>
        </NextLink>
      </Stack>
    </LinkBox>
  );
};
