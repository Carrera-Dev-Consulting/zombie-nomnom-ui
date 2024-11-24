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
      face: Face.foot,
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
      face: Face.foot,
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
      face: Face.foot,
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
    height: 100,
    width: 100,
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
    height: 100,
    width: 100,
  },
};

export const RedShotDie: Story = {
  args: {
    die: scenarios.red.shot,
    height: 100,
    width: 100,
  },
};

export const RedFootDie: Story = {
  args: {
    die: scenarios.red.foot,
    height: 100,
    width: 100,
  },
};

export const RedBrainDie: Story = {
  args: {
    die: scenarios.red.brain,
    height: 100,
    width: 100,
  },
};

export const GreenFootDie: Story = {
  args: {
    die: scenarios.green.feet,
    height: 100,
    width: 100,
  },
};

export const GreenBrainDie: Story = {
  args: {
    die: scenarios.green.brain,
    height: 100,
    width: 100,
  },
};

export const GreenShotDie: Story = {
  args: {
    die: scenarios.green.shot,
    height: 100,
    width: 100,
  },
};

export const YellowBrainDie: Story = {
  args: {
    die: scenarios.yellow.brain,
    height: 100,
    width: 100,
  },
};

export const YellowShotDie: Story = {
  args: {
    die: {
      color: Color.yellow,
      face: Face.shot,
    },
    height: 100,
    width: 100,
  },
};

export const YellowFootDie: Story = {
  args: {
    die: {
      color: Color.yellow,
      face: Face.foot,
    },
    height: 100,
    width: 100,
  },
};
