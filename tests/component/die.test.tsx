import * as React from "react";
import Die from "../../src/app/components/die/die";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Color, Face } from "../../src/app/game/game";

describe("Die Component", () => {
  it("Red Shot Die should render", async () => {
    const wrapper = render(
      <Die
        height={100}
        width={100}
        die={{ face: Face.shot, color: Color.red }}
      />
    );
    const face = screen.getByAltText("shot") as HTMLImageElement;
    const color = screen.getByAltText("red") as HTMLImageElement;
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Red Foot Die should render", async () => {
    const wrapper = render(
      <Die
        height={100}
        width={100}
        die={{ face: Face.foot, color: Color.red }}
      />
    );
    const face = screen.getByAltText("foot") as HTMLImageElement;
    const color = screen.getByAltText("red") as HTMLImageElement;
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Red Brain Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.brain, color: Color.red }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("brain") as HTMLImageElement;
    const color = screen.getByAltText("red") as HTMLImageElement;
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Red%20Die.png");
  });

  it("Yellow Shot Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.shot, color: Color.yellow }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("shot") as HTMLImageElement;
    const color = screen.getByAltText("yellow") as HTMLImageElement;
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Yellow Foot Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.foot, color: Color.yellow }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("foot") as HTMLImageElement;
    const color = screen.getByAltText("yellow") as HTMLImageElement;
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Yellow Brain Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.brain, color: Color.yellow }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("brain") as HTMLImageElement;
    const color = screen.getByAltText("yellow") as HTMLImageElement;
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Yellow%20Die.png");
  });

  it("Green Shot Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.shot, color: Color.green }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("shot") as HTMLImageElement;
    const color = screen.getByAltText("green") as HTMLImageElement;
    expect(face.src).toContain("gun.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Green Foot Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.foot, color: Color.green }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("foot") as HTMLImageElement;
    const color = screen.getByAltText("green") as HTMLImageElement;
    expect(face.src).toContain("feet.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Green Brain Die should render", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.brain, color: Color.green }}
        height={100}
        width={100}
      />
    );
    const face = screen.getByAltText("brain") as HTMLImageElement;
    const color = screen.getByAltText("green") as HTMLImageElement;
    expect(face.src).toContain("brain.png");
    expect(color.src).toContain("Green%20Die.png");
  });

  it("Red Die shotgun is drawn when told to draw", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.shot, color: Color.red }}
        draw={true}
        height={100}
        width={100}
      />
    );
    expect(await wrapper.findByText("shot")).toBeTruthy();
  });

  it("Red Die brain is drawn when told to draw", async () => {
    const wrapper = render(
      <Die
        die={{ face: Face.brain, color: Color.red }}
        draw={true}
        height={100}
        width={100}
      />
    );
    expect(await wrapper.findByText("brain")).toBeTruthy();
  });
});
