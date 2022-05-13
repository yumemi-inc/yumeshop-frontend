import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { NewsCard } from './index';

export default {
  component: NewsCard,
  title: 'molecules/NewsCard',
} as ComponentMeta<typeof NewsCard>;

const tags = {
  important: {
    key: 'd7b071eb-37f6-4fb7-be6f-ac7a33a03761',
    name: '重要',
    backGroundColor: 'red',
  },
  maintenance: {
    key: '4ca12003-6c27-4ac0-8c76-5b41662a8077',
    name: 'メンテナンス',
    backGroundColor: 'mediumpurple',
  },
  newProduct: {
    key: '84e4e574-073c-4e00-8d18-c2c8ea4b7421',
    name: '新商品',
    backGroundColor: 'orange',
  },
} as const;

export const General: ComponentStoryObj<typeof NewsCard> = {
  args: {
    title: 'メンテナンスのお知らせ',
    date: new Date('2017-07-21T17:32:28Z'),
    href: '#',
    tags: [tags.important, tags.maintenance],
  },
};

export const WithoutLink: ComponentStoryObj<typeof NewsCard> = {
  args: {
    title: 'メンテナンスのお知らせ',
    date: new Date('2017-07-21T17:32:28Z'),
    tags: [tags.important, tags.maintenance],
  },
};
