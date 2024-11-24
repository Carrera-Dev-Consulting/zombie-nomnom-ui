import * as React from "react";
import Game from "../../src/app/components/game/game";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonItemProps } from "@/app/components/game/options/options";
import { Color, Face } from "@/app/game/die";

describe("Game Component", () => {
  let defaultOptions: ButtonItemProps[] = [
    { buttonName: "Roll for More", press: () => {} },
    {
      buttonName: "Eat Brains",
      press: () => {},
    },
  ];
  it("Game should render", async () => {
    const wrapper = render(
      <Game dice={[]} options={defaultOptions} possiblePoints={0} shot={0} />
    );
    expect(await wrapper.findByText("Roll for More")).toBeTruthy();
    expect(await wrapper.findByText("Eat Brains")).toBeTruthy();
    expect(await wrapper.findByText("Possible Points: 0pts")).toBeTruthy();
    expect(await wrapper.findByText("Shot 0 Times")).toBeTruthy();
  });

  it("Game should render with dice", async () => {
    const wrapper = render(
      <Game
        dice={[
          { face: Face.shot, color: Color.red },
          { face: Face.shot, color: Color.red },
          { face: Face.shot, color: Color.red },
        ]}
        options={defaultOptions}
        possiblePoints={0}
        shot={0}
      />
    );
    expect(await wrapper.findByText("Roll for More")).toBeTruthy();
    expect(await wrapper.findByText("Eat Brains")).toBeTruthy();
    expect(await wrapper.findByText("Possible Points: 0pts")).toBeTruthy();
    expect(await wrapper.findByText("Shot 0 Times")).toBeTruthy();
  });

  it("Game with no options should render", async () => {
    const wrapper = render(
      <Game
        dice={[
          { face: Face.shot, color: Color.red },
          { face: Face.shot, color: Color.red },
          { face: Face.shot, color: Color.red },
        ]}
        options={[]}
        possiblePoints={0}
        shot={0}
      />
    );
    expect(await wrapper.findByText("Possible Points: 0pts")).toBeTruthy();
    expect(await wrapper.findByText("Shot 0 Times")).toBeTruthy();
  });

  it("Game with no dice should render", async () => {
    const wrapper = render(
      <Game dice={[]} options={defaultOptions} possiblePoints={0} shot={0} />
    );
    expect(await wrapper.findByText("Roll for More")).toBeTruthy();
    expect(await wrapper.findByText("Eat Brains")).toBeTruthy();
    expect(await wrapper.findByText("Possible Points: 0pts")).toBeTruthy();
    expect(await wrapper.findByText("Shot 0 Times")).toBeTruthy();
  });
});
