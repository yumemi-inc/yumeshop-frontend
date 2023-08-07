import { StoryObj, Meta } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'organisms/Tags',
  component: Tags,
};

export default meta;

type Story = StoryObj<typeof Tags>;
export const Default: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'tag',
        color: '#E89244',
        tag_group: 'shop_item',
      },
      {
        id: '2',
        name: 'tag',
        color: '#E89244',
        tag_group: 'shop_item',
      },
      {
        id: '3',
        name: 'tag',
        color: '#E89244',
        tag_group: 'shop_item',
      },
    ],
  },
};
