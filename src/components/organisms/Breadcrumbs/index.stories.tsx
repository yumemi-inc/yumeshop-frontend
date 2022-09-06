import type { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumbs } from './index';

export default {
  component: Breadcrumbs,
  title: 'organisms/Breadcrumbs',
} as Meta;

const props = [
  { link_url: "a", text: "a" },
  { link_url: "aaaa", text: "aaaa" },
  { link_url: "bbbb", text: "bbbb" },
  { text: "none" }
];

const Template: Story = () => <Breadcrumbs items={props} />;

export const breadcrumbs = Template.bind({});
