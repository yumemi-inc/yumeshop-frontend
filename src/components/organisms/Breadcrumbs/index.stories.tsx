import type { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumbs } from './index';

export default {
  component: Breadcrumbs,
  title: 'organisms/Breadcrumbs',
} as Meta;

const Template: Story = () => <Breadcrumbs items={[{ link_url: "a", text: "a" }, { link_url: "aaaa", text: "aaaa" }, { link_url: "aaaa", text: "aaaa" }, { text: "none" }]} />;

export const breadcrumbs = Template.bind({});
