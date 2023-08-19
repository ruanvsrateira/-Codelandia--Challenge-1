import type { Meta, StoryObj } from "@storybook/react";

import { Post } from "./Post";

const meta = {
  title: "Components/Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Master: Story = {
  args: {
    title: "Agora é oficial: o Windows 11 está vindo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    date: "02 de jul, 2021",
  },
};
