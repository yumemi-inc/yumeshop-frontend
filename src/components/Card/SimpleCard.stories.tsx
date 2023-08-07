import { StoryObj, Meta } from '@storybook/react';
import { SimpleCard } from './SimpleCard';

const meta: Meta<typeof SimpleCard> = {
  title: 'organisms/SimpleCard',
  component: SimpleCard,
};

export default meta;

type Story = StoryObj<typeof SimpleCard>;
export const Default: Story = {
  args: {
    content: 'テキストテキスト',
    thumbnail: 'https://placehold.jp/150x150.png',
    link: '/',
  },
};
