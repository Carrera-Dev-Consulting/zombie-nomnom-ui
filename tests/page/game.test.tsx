import * as React from "react";
import GamePage from "../../src/app/game/page";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

describe("Game Component", () => {
  it("Game should render with dice", async () => {
    const wrapper = render(<GamePage />);
    let players = [
      { name: "Milo", points: 10, current: true },
      { name: "Dean", points: 0, current: false },
      { name: "Xander", points: 5, current: false },
    ];
    expect(await wrapper.findByText("Roll for More")).toBeTruthy();
    expect(await wrapper.findByText("Eat brains")).toBeTruthy();
    expect(await wrapper.findByText("Possible Points: 10pts")).toBeTruthy();
    expect(await wrapper.findByText("Shot 2 Times")).toBeTruthy();
    players.map(async (player) => {
      expect(await wrapper.findByText(player.name)).toBeTruthy();
      expect(await wrapper.findByText(player.points)).toBeTruthy();
    });
  });
});
