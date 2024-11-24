import * as React from "react";
import Header from "../../src/app/components/header/header";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("Header should render with no links", async () => {
    const wrapper = render(<Header title="test" links={[]} />);
    expect(await wrapper.findByText("test")).toBeTruthy();
  });

  it("Header should render and render with links", async () => {
    const wrapper = render(
      <Header
        title="test"
        links={[
          { text: "Home", url: "/" },
          { text: "About", url: "/about" },
          { text: "Leaderboard", url: "/leaderboard" },
        ]}
      />
    );
    expect(await wrapper.findByText("test")).toBeTruthy();
    expect(await wrapper.findByText("Home")).toBeTruthy();
    expect(await wrapper.findByText("About")).toBeTruthy();
    expect(await wrapper.findByText("Leaderboard")).toBeTruthy();
  });
});
