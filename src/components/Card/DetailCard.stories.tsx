import { StoryObj, Meta } from '@storybook/react';
import { DetailCard } from './DetailCard';

const meta: Meta<typeof DetailCard> = {
  title: 'organisms/DetailCard',
  component: DetailCard,
};

export default meta;

type Story = StoryObj<typeof DetailCard>;
export const Default: Story = {
  args: {
    content: 'テキストテキストテキストテキストテキストテキスト',
    thumbnail: 'https://placehold.jp/150x150.png',
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
    price: {
      selling_price: 1000,
      original_price: 2000,
      discounted: true,
      discount_amount: 1000,
      discount_percentage: 50,
    },
    link: '/',
  },
};
