import type { Meta } from "@storybook/react";
import Die from "./die";
import { StoryObj } from "@storybook/react";
import { Color, Face } from "../../game/die";

var scenarios = {
  red: {
    shot: {
      color: Color.red,
      face: Face.shot,
    },
    brain: {
      color: Color.red,
      face: Face.brain,
    },
    foot: {
      color: Color.red,
      face: Face.feet,
    },
  },
  yellow: {
    shot: {
      color: Color.yellow,
      face: Face.shot,
    },
    brain: {
      color: Color.yellow,
      face: Face.brain,
    },
    feet: {
      color: Color.yellow,
      face: Face.feet,
    },
  },
  green: {
    shot: {
      color: Color.green,
      face: Face.shot,
    },
    brain: {
      color: Color.green,
      face: Face.brain,
    },
    feet: {
      color: Color.green,
      face: Face.feet,
    },
  },
};

const meta: Meta<typeof Die> = {
  component: Die,
  tags: ["components"],
  args: {
    die: {
      color: Color.red,
      face: Face.shot,
    },
  },
};
type Story = StoryObj<typeof Die>;

export default meta;

export const BasicDie: Story = {
  args: {
    die: {
      color: Color.red,
      face: Face.shot,
    },
  },
};

export const RedShotDie: Story = {
  args: {
    die: scenarios.red.shot,
  },
};

export const RedFootDie: Story = {
  args: {
    die: scenarios.red.foot,
  },
};

export const RedBrainDie: Story = {
  args: {
    die: scenarios.red.brain,
  },
};

export const GreenFootDie: Story = {
  args: {
    die: scenarios.green.feet,
  },
};

export const GreenBrainDie: Story = {
  args: {
    die: scenarios.green.brain,
  },
};

export const GreenShotDie: Story = {
  args: {
    die: scenarios.green.shot,
  },
};

export const YellowBrainDie: Story = {
  args: {
    die: scenarios.yellow.brain,
  },
};

export const YellowShotDie: Story = {
  args: {
    die: {
      color: Color.yellow,
      face: Face.shot,
    },
  },
};

export const YellowFootDie: Story = {
  args: {
    die: {
      color: Color.yellow,
      face: Face.feet,
    },
  },
};
