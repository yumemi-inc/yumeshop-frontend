import type { Meta, Story } from '@storybook/react/types-6-0';
import { Logo } from './index';

export default {
  component: Logo,
  title: 'atoms/Logo',
} as Meta;

const Template: Story = () => <Logo />;

export const logo = Template.bind({});
