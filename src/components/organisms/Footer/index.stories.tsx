import type { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from './index';

export default {
  component: Footer,
  title: 'organisms/Footer',
} as Meta;

const Template: Story = () => <Footer />;

export const footer = Template.bind({});
