import type { Meta, Story } from '@storybook/react';

import Heading from '../../../component/_root/Heading';
import type { HeadingProps } from '../../../types/_root';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    variant: {
      description: 'This refers to html heading tag',
      defaultValue: {
        summary: 'h4',
      },
    },

    label: {
      description: 'This refers to text inside of heading tag',
    },

    styleClass: {
      description: 'This refers to css classes',
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const h1 = Template.bind({});

h1.args = {
  variant: 'h1',
  label: 'this is heading h1',
  styleClass: '',
};

export const h2 = Template.bind({});

h2.args = {
  variant: 'h2',
  label: 'this is heading h2',
  styleClass: '',
};

export const h3 = Template.bind({});

h3.args = {
  variant: 'h3',
  label: 'this is heading h3',
  styleClass: '',
};

export const h4 = Template.bind({});

h4.args = {
  variant: 'h4',
  label: 'this is heading h4',
  styleClass: '',
};

export const h5 = Template.bind({});

h5.args = {
  variant: 'h5',
  label: 'this is heading h5',
  styleClass: '',
};

export const h6 = Template.bind({});

h6.args = {
  variant: 'h6',
  label: 'this is heading h6',
  styleClass: '',
};

export const Default = Template.bind({});

Default.args = {
  variant: 'h4',
  label: 'this is heading h6',
  styleClass: '',
};
