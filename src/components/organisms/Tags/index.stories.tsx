import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tags } from './index';
import { colors } from 'src/styles/Tokens';
import { TagGroup } from 'src/openapi/generated/typescript-fetch/models/TagGroup';

export default {
  component: Tags,
  title: 'organisms/Tags',
} as Meta;

const props = [
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
];

const Template: Story = () => <Tags items={props} />;

export const tags = Template.bind({});
