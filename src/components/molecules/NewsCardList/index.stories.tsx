import { NewsCardList } from 'src/components/molecules/NewsCardList/index';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: NewsCardList,
  title: 'molecules/NewsCardList',
} as ComponentMeta<typeof NewsCardList>;

export const General: ComponentStoryObj<typeof NewsCardList> = {
  args: {
    cards: [
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
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
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186e',
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
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
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
    ],
  },
};
