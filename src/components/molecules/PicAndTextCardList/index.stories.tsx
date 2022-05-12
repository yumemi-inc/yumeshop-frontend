import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PicAndTextCardList } from 'src/components/molecules/PicAndTextCardList/index';

export default {
  component: PicAndTextCardList,
  title: 'molecules/PicAndTextCardList',
} as ComponentMeta<typeof PicAndTextCardList>;

export const General: ComponentStoryObj<typeof PicAndTextCardList> = {
  args: {
    cards: [
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        title: '文房具セール',
        href: '#',
        thumbnailUrl: 'https://picsum.photos/300/200',
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        title: 'キャンプ用品セール',
        href: '#',
        thumbnailUrl: 'https://picsum.photos/300/200',
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186e',
        title: 'テキストテキストテキストテキストテキストテキストテキスト',
        href: '#',
        thumbnailUrl: 'https://picsum.photos/300/200',
      },
    ],
    cardWidth: '200px',
  },
};
