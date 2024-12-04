import { fn } from '@storybook/test';
import { within, userEvent } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/vue3';
import TextInput from "./TextInput.vue";


const meta = {
  title: 'Foundation/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    onBlur: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Please input sth",
    type: "email",
  }
};

export const EmailInput: Story = {
  args: {
    placeholder: "email@host.com",
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const emailInput = await canvas.getByPlaceholderText("email@host.com")
    await userEvent.click(emailInput)
    await userEvent.keyboard("wendy.gu@123.com")
  }
}

export const NumberText: Story = {
  args: {
    placeholder: "please input a number",
    type: "number",
    onBlur: fn(),
  },
  // play: async ({ canvasElement, args }) => {
  //   const canvas = within(canvasElement);
  //   const input = await canvas.getByPlaceholderText("please input a number");
  //   await userEvent.click(input);
  //   await userEvent.keyboard("123"); // 输入数字
  //   await userEvent.tab(); // 触发 blur 事件

  //   // 查看 fn() 被调用的情况
  //   console.log(args.onBlur?.mock.calls); // 打印调用记录s
  // }
};
