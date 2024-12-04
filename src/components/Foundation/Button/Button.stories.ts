import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions/decorator';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'FOUNDATION/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['mouseover', 'click .oauk-button']
    }
  },
  decorators: [withActions],
  argTypes: {
    btnType: { control: 'select', options: ['default', 'primary', 'danger'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    isMid: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'I am a Primary',
  args: {
    label: "Button",
    btnType: "primary",
    isMid: false,
  },
};

export const Default: Story = {
  args: {
    label: "Button",
    btnType: "default",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    btnType: "primary",
    isMid: true,
  },
};

export const IconDefault: Story = {
  args: {
    isIconBtn: true,
    label: "Button",
    btnType: "default",
  },
};

export const IconPrimary: Story = {
  args: {
    isIconBtn: true,
    label: "Button",
    btnType: "primary",
  },
};
