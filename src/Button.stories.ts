// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from "@storybook/vue3";

import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {}
};
export default meta;

type Story = StoryObj<typeof Button>;

export const OnDark: Story = {
  // 👇 Story-level parameters
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    primary: true,
    label: "Button",
  }
};