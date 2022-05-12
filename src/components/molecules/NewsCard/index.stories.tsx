import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { NewsCard } from './index';

export default {
  component: NewsCard,
  title: 'molecules/NewsCard',
} as ComponentMeta<typeof NewsCard>;

export const General: ComponentStoryObj<typeof NewsCard> = {
  args: {
    title: 'メンテナンスのお知らせ',
    date: new Date('2017-07-21T17:32:28Z'),
    href: '#',
    tags: [
      {
        name: '重要',
        backGroundColor: 'red',
      },
      {
        name: 'メンテナンス',
        backGroundColor: 'yellow',
      },
    ],
  },
};
