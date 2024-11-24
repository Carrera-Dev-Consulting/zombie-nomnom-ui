import * as React from "react";
import { DieModel } from "../../src/app/game/die";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Face, Color } from "../../src/app/game/die";

describe("Die Model", () => {
  it("Initalizing Red Die should have the right values", async () => {
    let die: DieModel = { face: Face.shot, color: Color.red };
    expect(die.face).toBe(Face.shot);
    expect(die.color).toBe(Color.red);
  });

  it("Initalizing Yellow Die should have the right values", async () => {
    let die: DieModel = { face: Face.shot, color: Color.yellow };
    expect(die.face).toBe(Face.shot);
    expect(die.color).toBe(Color.yellow);
  });

  it("Initalizing Green Die should have the right values", async () => {
    let die: DieModel = { face: Face.shot, color: Color.green };
    expect(die.face).toBe(Face.shot);
    expect(die.color).toBe(Color.green);
  });
});
