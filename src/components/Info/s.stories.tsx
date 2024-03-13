import type { Meta, StoryObj } from "@storybook/react";

import { Info } from ".";

const meta = {
  title: "Components/Info",
  component: Info,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgSrc: "1.svg",
    title: "Дякуємо за ваш час та важливу відповідь!",
    text: "Ваші відгуки допомагають нам покращувати якість наших послуг",
  },
};
