import type { Meta, StoryObj } from "@storybook/react";

import { Survey } from ".";

const meta = {
  title: "Pages/Survey",
  component: Survey,
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
