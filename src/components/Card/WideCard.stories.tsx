import { StoryObj, Meta } from '@storybook/react';
import { WideCard } from './WideCard';

const meta: Meta<typeof WideCard> = {
  title: 'organisms/WideCard',
  component: WideCard,
};

export default meta;

type Story = StoryObj<typeof WideCard>;
export const Default: Story = {
  args: {
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    date: '2020/12/23',
    tags: [
      {
        id: '1',
        name: '重要',
        color: '#E20E20',
        tag_group: 'shop_item',
      },
      {
        id: '2',
        name: '新商品',
        color: '#E89244',
        tag_group: 'shop_item',
      },
    ],
    link: '/',
  },
};
