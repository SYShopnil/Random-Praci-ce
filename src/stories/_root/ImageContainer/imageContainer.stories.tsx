import type { Meta, Story } from '@storybook/react';

import type { ImageContainerProps } from '@/types/_root';

import { ImageContainer } from '../../../component/_root';

export default {
  title: 'Image',
  component: ImageContainer,
  argTypes: {
    src: {
      description: 'This will contain the image url',

      type: { name: 'string', required: true },
    },
    alt: {
      description: 'This will cantain the ALT string for the image',

      type: { name: 'string', required: true },
    },
    height: {
      description: 'This will cantain the image height',

      type: { name: 'number', required: true },
    },
    width: {
      description: 'This will cantain the image width',

      type: { name: 'number', required: true },
    },
    className: {
      description: 'This will cantain the inline css classes for the image',
    },
    layout: {
      description: 'This will cantain the layout type of the image',
      options: ['fill', 'responsive', 'intrinsic', 'fixed'],
      control: { type: 'select' },
    },
  },
} as Meta;

// create a image container templete
const Template: Story<ImageContainerProps> = (args) => (
  <ImageContainer {...args} />
);

// small image

export const smallImage = Template.bind({});
smallImage.args = {
  src: '/assets/images/nextjs-starter-banner.png',
  alt: 'next image',
  height: 200,
  width: 200,
  className: '',
  layout: '',
};

// big image
export const bigImage = Template.bind({});

bigImage.args = {
  src: '/assets/images/nextjs-starter-banner.png',
  alt: 'next image',
  height: 500,
  width: 500,
  className: '',
  layout: '',
};
