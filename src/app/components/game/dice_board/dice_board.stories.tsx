import type { Meta } from "@storybook/react";

import DiceBoard from "./dice_board";
import { StoryObj } from "@storybook/react";
import { Color, Face } from "@/app/game/die";

const meta: Meta<typeof DiceBoard> = {
  component: DiceBoard,
  tags: ["components"],
  args: {
    dice: [
      { color: Color.red, face: Face.shot },
      { color: Color.red, face: Face.foot },
      { color: Color.red, face: Face.brain },
    ],
  },
};
type Story = StoryObj<typeof DiceBoard>;

export default meta;

export const BasicDiceBoard: Story = {
  args: {
    dice: [
      { color: Color.red, face: Face.shot },
      { color: Color.red, face: Face.foot },
      { color: Color.red, face: Face.brain },
    ],
  },
};
