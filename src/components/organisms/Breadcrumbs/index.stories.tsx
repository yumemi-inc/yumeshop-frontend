import type { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumbs } from './index';

export default {
  component: Breadcrumbs,
  title: 'organisms/Breadcrumbs',
} as Meta;

const Template: Story = () => <Breadcrumbs />;

export const breadcrumbs = Template.bind({});
