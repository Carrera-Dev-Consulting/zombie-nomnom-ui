import * as React from "react";
import Player from "../../src/app/components/player/player";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Non current Player Component", () => {
  it("Player should render player values", async () => {
    const wrapper = render(
      <Player player={{ name: "test", points: 0, current: false }} />
    );
    expect(await wrapper.findByText("test:")).toBeTruthy();
    expect(await wrapper.findByText("0")).toBeTruthy();
  });
  it("Current Player should render player values", async () => {
    const wrapper = render(
      <Player player={{ name: "test", points: 0, current: true }} />
    );
    expect(await wrapper.findByText("test:")).toBeTruthy();
    expect(await wrapper.findByText("0")).toBeTruthy();
  });
  it("Player should render contain player styles", async () => {
    const wrapper = render(
      <Player player={{ name: "test", points: 0, current: false }} />
    );
    const element = screen.getByText("test:");
    expect(element).toHaveClass("pt-2");
  });
});
