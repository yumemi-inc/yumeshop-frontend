import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PicAndTextCardList } from './index';

export default {
  component: PicAndTextCardList,
  title: 'molecules/PicAndTextCardList',
} as ComponentMeta<typeof PicAndTextCardList>;

const baseCard = {
  width: '200px',
  href: '#',
  thumbnailUrl: 'https://picsum.photos/300/200',
};
export const General: ComponentStoryObj<typeof PicAndTextCardList> = {
  args: {
    cards: [
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        title: '文房具セール',
        ...baseCard,
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        title: 'キャンプ用品セール',
        ...baseCard,
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186e',
        title: 'テキストテキストテキストテキストテキスト',
        ...baseCard,
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186f',
        title: 'テキストテキストテキストテキストテキストテキストテキスト',
        ...baseCard,
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186g',
        title: 'テキストテキストテキストテキストテキストテキストテキスト',
        ...baseCard,
      },
    ],
  },
};
