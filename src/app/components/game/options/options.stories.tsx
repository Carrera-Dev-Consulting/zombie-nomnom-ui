import type { Meta } from "@storybook/react";

import Options from "./options";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Options> = {
  component: Options,
  tags: ["components"],
  args: {
    options: [
      {
        buttonName: "Roll for More",
        callback: () => {
          console.log("Roll for More");
        },
      },
      {
        buttonName: "Eat brains",
        callback: () => {
          console.log("MMMMM Brains");
        },
      },
    ],
  },
};
type Story = StoryObj<typeof Options>;

export default meta;

export const BasicOptions: Story = {
  args: {
    options: [
      {
        buttonName: "Roll for More",
        callback: () => {
          console.log("Roll for More");
        },
      },
      {
        buttonName: "Eat brains",
        callback: () => {
          console.log("MMMMM Brains");
        },
      },
    ],
  },
};
