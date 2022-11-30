import type { Meta, Story } from '@storybook/react';

import type { ButtonProps } from '@/types/_root';

import { Button } from '../../../component/_root';

// button component props description part
export default {
  title: 'Button',
  component: Button,
  describe:
    "There have `two` types of button. One is `linkable` and other is `Controller base`. A `linkable` button contains a `href` and by clicking that `href` it will redirect user to that link. And a `Controller base` button will contains `arg` as it's data and pass that data into the `controller`. It has many `variant` of design. But functionally was same as described",
  argTypes: {
    // config of label props
    label: {
      description:
        'It will contain a string which will be displayed as a label of that button ',
      defaultValue: {
        summary: 'Click Me',
      },
      type: {
        name: 'string',
        required: true,
      },
    },

    // config of controller props
    controller: {
      description:
        'This will contains the button controller with two parameters `first` one contains the `event` and as a `second` parameter it will contains `data` what user want to pass through the `parent` component.',
      type: {
        name: 'function',
        required: false,
      },
    },

    // config of arg props
    arg: {
      description:
        "This will contains the data what the button controller contains as it's `second` parameter.",
      type: {
        name: 'object',
        required: false,
      },
    },

    // config of nameOfClass props
    nameOfClass: {
      description: "This will contains any tailwind css's valid class name",
      type: {
        name: 'string',
        required: false,
      },
    },

    // config of isLinkable props
    isLinkable: {
      description:
        "There have `two` types of button. One is `linkable` and other is `Controller base`. A `linkable` button contains a `href` and by clicking that `href` it will redirect user to that link. And a `Controller base` button will contains `arg` as it's data and pass that data into the `controller`.",
      options: [true, false],
      control: {
        type: 'select',
        default: true,
      },
      type: {
        required: true,
      },
    },

    // config of href props
    href: {
      description:
        "If user want a `linkable` button then it's mandatory to pass a `href` valid link.",
      type: {
        name: 'string',
        required: false,
      },
    },

    // config of variant props
    variant: {
      description:
        'Button has many `variant` of design. So user need to pass a variant type.',
      options: ['v1', 'v2', 'v3', 'v4', 'default'],
      control: {
        type: 'select',
        default: 'default',
      }, // this will be an controller
      type: {
        required: true,
      },
    },
  },
} as unknown as Meta;

const Template: Story<ButtonProps> = (arg) => <Button {...arg} />; // create the template of button

// variant one
export const variantOneButton = Template.bind({});
variantOneButton.args = {
  label: 'Variant One',
  isLinkable: true,
  href: 'https://github.com/',
  variant: 'v1',
};

// variant two
export const variantTwoButton = Template.bind({});
variantTwoButton.args = {
  label: 'Variant Two',
  isLinkable: true,
  href: 'https://github.com/',
  variant: 'v2',
};

// variant three
export const variantThreeButton = Template.bind({});
variantThreeButton.args = {
  label: 'Variant Three',
  isLinkable: true,
  href: 'https://github.com/',
  variant: 'v3',
};
// variant four
export const variantFourButton = Template.bind({});
variantFourButton.args = {
  label: 'Variant Four',
  isLinkable: true,
  href: 'https://github.com/',
  variant: 'v4',
};

// default variant
export const defaultButton = Template.bind({});
defaultButton.args = {
  label: 'Default',
  isLinkable: true,
  href: 'https://github.com/',
  variant: 'default',
};
