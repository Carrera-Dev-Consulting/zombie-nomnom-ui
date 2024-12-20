import type { Meta } from "@storybook/react";

import PlayerList from "./player_list";
import { StoryObj } from "@storybook/react";

var scenarios = {
  default: {
    players: [
      { name: "Milo", points: 10, current: true },
      { name: "Dean", points: 0, current: false },
      { name: "Xander", points: 5, current: false },
    ],
  },
  noPlayers: {
    players: [],
  },
};

const meta: Meta<typeof PlayerList> = {
  component: PlayerList,
  tags: ["components"],
  args: {},
};
type Story = StoryObj<typeof PlayerList>;

export default meta;

export const BasicPlayerList: Story = {
  args: {
    players: scenarios.default.players,
  },
};

export const NoPlayers: Story = {
  args: {
    players: scenarios.noPlayers.players,
  },
};
