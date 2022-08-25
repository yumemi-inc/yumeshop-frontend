import type { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'layout/Footer',
} as Meta;

const Template: Story = () => <Footer />;

export const footer = Template.bind({});
