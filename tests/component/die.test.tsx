import * as React from "react";
import Die from "../../src/app/components/die/die";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Face, Color } from "../../src/app/game/die";

describe("Die Component", () => {
  it("Red Shot Die should render", async () => {
    const wrapper = render(<Die die={{ face: Face.shot, color: Color.red }} />);
    const face = screen.getByAltText("shot");
    const color = screen.getByAltText("red");
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Red Foot Die should render", async () => {
    const wrapper = render(<Die die={{ face: Face.feet, color: Color.red }} />);
    const face = screen.getByAltText("feet");
    const color = screen.getByAltText("red");
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Red Brain Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.brain, color: Color.red }} />
    );
    const face = screen.getByAltText("brain");
    const color = screen.getByAltText("red");
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Yellow Shot Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.shot, color: Color.yellow }} />
    );
    const face = screen.getByAltText("shot");
    const color = screen.getByAltText("yellow");
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Yellow Foot Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.feet, color: Color.yellow }} />
    );
    const face = screen.getByAltText("feet");
    const color = screen.getByAltText("yellow");
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Yellow Brain Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.brain, color: Color.yellow }} />
    );
    const face = screen.getByAltText("brain");
    const color = screen.getByAltText("yellow");
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Green Shot Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.shot, color: Color.green }} />
    );
    const face = screen.getByAltText("shot");
    const color = screen.getByAltText("green");
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Green Foot Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.feet, color: Color.green }} />
    );
    const face = screen.getByAltText("feet");
    const color = screen.getByAltText("green");
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Green Brain Die should render", async () => {
    const wrapper = render(
      <Die die={{ face: Face.brain, color: Color.green }} />
    );
    const face = screen.getByAltText("brain");
    const color = screen.getByAltText("green");
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Red Die shotgun is drawn when told to draw", async () => {
    const wrapper = render(
      <Die die={{ face: Face.shot, color: Color.red }} draw={true} />
    );
    expect(await wrapper.findByText("shot")).toBeTruthy();
  });

  it("Red Die brain is drawn when told to draw", async () => {
    const wrapper = render(
      <Die die={{ face: Face.brain, color: Color.red }} draw={true} />
    );
    expect(await wrapper.findByText("brain")).toBeTruthy();
  });
});
