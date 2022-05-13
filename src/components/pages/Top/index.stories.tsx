import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TopPage } from 'src/components/pages/Top/index';

export default {
  component: TopPage,
  title: 'pages/Top',
} as ComponentMeta<typeof TopPage>;

export const General: ComponentStoryObj<typeof TopPage> = {};
