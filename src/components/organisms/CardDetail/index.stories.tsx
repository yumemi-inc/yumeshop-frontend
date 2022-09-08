import type { Meta, Story } from '@storybook/react/types-6-0';
import { CardWide } from './index';
import { colors } from 'src/styles/Tokens';
import { TagGroup } from 'src/openapi/generated/typescript-fetch/models/TagGroup';

export default {
  component: CardWide,
  title: 'organisms/CardWide',
} as Meta;

const props = {
  selling_price: 360,
  tags: [
    {
      id: "1",
      name: "新商品",
      color: colors.Orange,
      tag_group: TagGroup.Information,
    },
    {
      id: "2",
      name: "特別価格",
      color: colors.Red,
      tag_group: TagGroup.Information,
    },
    {
      id: "3",
      name: "期間限定",
      color: colors.YumeGreen,
      tag_group: TagGroup.Information,
    }
  ],
  text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  imageUrl: "https://www.yumemi.co.jp/images/logo_yumemi_02.svg"
}

const discount_props = {
  selling_price: 360,
  original_price: 400,
  discount_percentage: 10,
  tags: [
    {
      id: "1",
      name: "新商品",
      color: colors.Orange,
      tag_group: TagGroup.Information,
    },
    {
      id: "2",
      name: "特別価格",
      color: colors.Red,
      tag_group: TagGroup.Information,
    },
    {
      id: "3",
      name: "期間限定",
      color: colors.YumeGreen,
      tag_group: TagGroup.Information,
    }
  ],
  text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  imageUrl: "https://www.yumemi.co.jp/images/logo_yumemi_02.svg"
}

const Template: Story = () => <CardWide {...props} />;
const Discount: Story = () => <CardWide {...discount_props} />;

export const cardwide = Template.bind({});
export const cardwidediscount = Discount.bind({});
