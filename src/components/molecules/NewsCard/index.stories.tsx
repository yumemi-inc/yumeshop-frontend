import { NewsCard } from 'src/components/molecules/NewsCard/index';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: NewsCard,
  title: 'molecules/NewsCard',
} as ComponentMeta<typeof NewsCard>;

export const General: ComponentStoryObj<typeof NewsCard> = {
  args: {
    title: 'メンテナンスのお知らせ',
    date: new Date(2020, 12 - 1, 23),
    href: '#',
    tags: [
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        name: '重要',
        color: '#E20E20',
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        name: 'メンテナンス',
        color: '#E89244',
      },
    ],
  },
};
