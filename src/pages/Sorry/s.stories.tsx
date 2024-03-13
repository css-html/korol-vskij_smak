import type { Meta, StoryObj } from "@storybook/react";

import { Sorry } from ".";

const meta = {
  title: "Pages/Sorry",
  component: Sorry,
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Sorry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
