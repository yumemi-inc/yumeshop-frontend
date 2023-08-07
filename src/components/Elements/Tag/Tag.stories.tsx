import { StoryObj, Meta } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'organisms/Tag',
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;
export const Default: Story = {
  args: {
    id: '1',
    name: 'tag',
    color: '#E89244',
    tag_group: 'shop_item',
  },
};
