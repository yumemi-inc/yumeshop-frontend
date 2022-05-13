import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TopPage } from 'src/components/page/Top/index';

export default {
  component: TopPage,
  title: 'page/Top',
} as ComponentMeta<typeof TopPage>;

export const General: ComponentStoryObj<typeof TopPage> = {};
