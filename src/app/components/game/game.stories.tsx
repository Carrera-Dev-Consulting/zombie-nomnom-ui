import type { Meta } from "@storybook/react";

import { StoryObj } from "@storybook/react";
import Game from "./game";
import { Color, Face } from "@/app/game/die";

const meta: Meta<typeof Game> = {
  component: Game,
  tags: ["components"],
  args: {
    possiblePoints: 10,
    shot: 2,
    options: [
      {
        buttonName: "Roll for More",
        press: () => {},
      },
      {
        buttonName: "Eat brains",
        press: () => {},
      },
    ],
  },
};
type Story = StoryObj<typeof Game>;

export default meta;

export const BasicGame: Story = {
  args: {
    possiblePoints: 10,
    shot: 2,
    options: [
      {
        buttonName: "Roll for More",
        press: () => {
          console.log("Roll for More");
        },
      },
      {
        buttonName: "Eat brains",
        press: () => {
          console.log("Eat brains");
        },
      },
    ],
    dice: [
      {
        color: Color.red,
        face: Face.shot,
      },
      {
        color: Color.red,
        face: Face.foot,
      },
      {
        color: Color.red,
        face: Face.brain,
      },
    ],
  },
};
