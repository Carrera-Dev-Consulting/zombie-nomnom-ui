import type { Meta } from "@storybook/react";

import { StoryObj } from "@storybook/react";
import CurrentPlayer from "./current_player";

const meta: Meta<typeof CurrentPlayer> = {
  component: CurrentPlayer,
  tags: ["components"],
  args: {
    possiblePoints: 10,
    shots: 2,
  },
};
type Story = StoryObj<typeof CurrentPlayer>;

export default meta;

export const BasicCurrentPlayer: Story = {
  args: {
    possiblePoints: 10,
    shots: 2,
  },
};
