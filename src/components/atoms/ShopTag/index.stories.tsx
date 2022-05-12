import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ShopTag } from 'src/components/atoms/ShopTag/index';

export default {
  component: ShopTag,
  title: 'atoms/ShopTag',
} as ComponentMeta<typeof ShopTag>;

export const General: ComponentStoryObj<typeof ShopTag> = {
  args: {
    name: '重要',
    backGroundColor: 'red',
  },
};
