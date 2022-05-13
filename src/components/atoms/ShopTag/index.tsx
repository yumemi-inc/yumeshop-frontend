import React, { VFC } from 'react';
import { Tag } from '@chakra-ui/react';

export interface ShopTagProps {
  name: string;
  backGroundColor: string;
  textColor?: string;
}

export const ShopTag: VFC<ShopTagProps> = ({
  name,
  backGroundColor,
  textColor = 'White',
}) => (
  <Tag
    color={textColor}
    backgroundColor={backGroundColor}
    borderRadius="none"
    fontSize="md"
  >
    {name}
  </Tag>
);
