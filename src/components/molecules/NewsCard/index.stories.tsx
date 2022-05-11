import { NewsCard } from 'src/components/molecules/NewsCard/index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: NewsCard,
  title: 'molecules/NewsCard',
} as Meta;

type NewsCardProps = React.ComponentProps<typeof NewsCard>;

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;

export const General = Template.bind({});
General.args = {};
