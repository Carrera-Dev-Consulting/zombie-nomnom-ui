import * as React from "react";
import PlayerList from "../../src/app/components/player_list/player_list";
import { describe, it, expect } from "@jest/globals";
import { render } from "@testing-library/react";

var scenarios = {
  validPlayerList: {
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

describe("Player List Component", () => {
  it("Player should render player values", async () => {
    const wrapper = render(
      <PlayerList players={scenarios.validPlayerList.players} />
    );
    expect(await wrapper.findByText("Milo:")).toBeTruthy();
    expect(await wrapper.findByText("10")).toBeTruthy();
    expect(await wrapper.findByText("Dean:")).toBeTruthy();
    expect(await wrapper.findByText("0")).toBeTruthy();
    expect(await wrapper.findByText("Xander:")).toBeTruthy();
    expect(await wrapper.findByText("5")).toBeTruthy();
    expect(await wrapper.findByText("Players")).toBeTruthy();
  });
  it("Player list should render with no players", async () => {
    const wrapper = render(
      <PlayerList players={scenarios.noPlayers.players} />
    );
    expect(await wrapper.findByText("No Players")).toBeTruthy();
    expect(await wrapper.findByText("Players")).toBeTruthy();
  });
});
