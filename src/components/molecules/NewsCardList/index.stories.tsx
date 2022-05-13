import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { NewsCardList } from './index';

export default {
  component: NewsCardList,
  title: 'molecules/NewsCardList',
} as ComponentMeta<typeof NewsCardList>;

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

export const General: ComponentStoryObj<typeof NewsCardList> = {
  args: {
    cards: [
      {
        title: '文房具フェアのお知らせ',
        tags: [],
        date: new Date('2021-07-01T00:00:00+09:00'),
        key: '0dfd7659-7217-4eab-a348-b07ee238853e',
      },
      {
        title: '新作ゲームの入荷',
        tags: [tags.important, tags.newProduct],
        date: new Date('2021-07-01T00:00:00+09:00'),
        key: 'a3aa65c7-dc44-4a4b-b6bd-669552738be6',
      },
      {
        title: 'メンテナンスのお知らせ',
        tags: [tags.important, tags.maintenance],
        date: new Date('2021-07-01T00:00:00+09:00'),
        key: '57a7daf9-c920-4ca1-be49-d934252e711a',
      },
    ],
  },
};
