import { ImageCarousel } from 'src/components/molecules/ImageCarousel/index';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: ImageCarousel,
  title: 'molecules/ImageCarousel',
} as ComponentMeta<typeof ImageCarousel>;

export const General: ComponentStoryObj<typeof ImageCarousel> = {
  args: {
    items: [
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        alt: '春の大感謝祭',
        href: '#',
        imageUrl: 'https://picsum.photos/600/600',
      },
      {
        key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        alt: '秋の大感謝祭',
        href: '#',
        imageUrl: 'https://picsum.photos/600/600',
      },
    ],
  },
};
