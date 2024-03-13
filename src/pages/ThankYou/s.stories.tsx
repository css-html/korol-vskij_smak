import type { Meta, StoryObj } from "@storybook/react";

import { ThankYou } from ".";

const meta = {
  title: "Pages/ThankYou",
  component: ThankYou,
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ThankYou>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
