import { PlayerModel } from "../../src/app/game/game";
import { describe, expect, it } from "@jest/globals";

describe("Player Model", () => {
  it("Initalizing a non current Player should have the right values", async () => {
    let player: PlayerModel = { name: "test", points: 0, current: false };
    expect(player.name).toBe("test");
    expect(player.points).toBe(0);
    expect(player.current).toBe(false);
  });

  it("Initalizing a current Player should have the right values", async () => {
    let player: PlayerModel = { name: "test", points: 0, current: true };
    expect(player.name).toBe("test");
    expect(player.points).toBe(0);
    expect(player.current).toBe(true);
  });

  it("Initalizing a Player with points should have the right values", async () => {
    let player: PlayerModel = { name: "test", points: 10, current: false };
    expect(player.name).toBe("test");
    expect(player.points).toBe(10);
    expect(player.current).toBe(false);
  });

  it("Initalizing a player with bad values should have the right values", async () => {
    let player: PlayerModel = { name: "", points: -10, current: false };
    expect(player.name).toBe("");
    expect(player.points).toBe(-10);
    expect(player.current).toBe(false);
  });
});
