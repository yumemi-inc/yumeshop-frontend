import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionTitle } from './SectionTitle';

export default {
  component: SectionTitle,
  title: 'common/SectionTitle',
} as Meta;

const Template: Story = () => <SectionTitle>セクションタイトル</SectionTitle>;

export const sectionTitle = Template.bind({});
