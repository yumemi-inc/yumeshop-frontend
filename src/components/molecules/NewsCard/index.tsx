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
import React, { useMemo, VFC } from 'react';
import NextLink from 'next/link';
import { dateToYYYYMMDD } from 'src/libs/util/dateToYYYYMMDD';
import { ShopTag, ShopTagProps } from '../../atoms/ShopTag';

export interface NewsCardProps {
  title: string;
  date: Date;
  tags: (ShopTagProps & {
    key: string;
  })[];
  href?: string;
}

export const NewsCard: VFC<NewsCardProps & BoxProps> = ({
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
          <ShopTag {...tag} />
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
