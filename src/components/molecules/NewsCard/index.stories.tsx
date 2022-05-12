import { NewsCard } from 'src/components/molecules/NewsCard/index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: NewsCard,
  title: 'molecules/NewsCard',
} as Meta;

type NewsCardProps = React.ComponentProps<typeof NewsCard>;

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;

export const General = Template.bind({});
General.args = {
  title: 'メンテナンスのお知らせ',
  date: new Date(2022, 4, 11),
  href: '#',
  tags: [
    {
      key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
      name: '重要',
      color: 'red',
    },
    {
      key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
      name: 'メンテナンス',
      color: 'yellow',
    },
  ],
};
