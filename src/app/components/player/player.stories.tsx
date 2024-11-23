import type { Meta } from "@storybook/react";

import Player from "./player";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Player> = {
  component: Player,
  tags: ["components"],
  args: {
    player: {
      name: "Player Name",
      points: 0,
      current: false,
    },
  },
};
type Story = StoryObj<typeof Player>;

export default meta;

export const ControlPlayer: Story = {
  args: {
    player: {
      name: "Player Name",
      points: 0,
      current: false,
    },
  },
};

export const UnselectedPlayer: Story = {
  args: {
    player: {
      name: "Unselected Player",
      points: 0,
      current: false,
    },
  },
};

export const CurrentPlayer: Story = {
  args: {
    player: {
      name: "Current Player",
      points: 0,
      current: true,
    },
  },
};

export const NoInformation: Story = {
  args: {
    player: undefined,
  },
};
