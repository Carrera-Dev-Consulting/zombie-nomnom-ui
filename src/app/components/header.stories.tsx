import type { Meta } from "@storybook/react";

import Header from "./header";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["components"],
  args: {
    title: "Header",
    links: [
      { text: "Leaderboard", url: "/leaderboard" },
      { text: "About Us", url: "/about" },
    ],
  },
};
type Story = StoryObj<typeof Header>;

export default meta;

export const BasicHeader: Story = {
  args: {
    title: "Basic Header",
    links: [
      { text: "Leaderboard", url: "/leaderboard" },
      { text: "About Us", url: "/about" },
    ],
  },
};

export const NoLinks: Story = {
  args: {
    title: "No Links",
    links: [],
  },
};
