import * as React from "react";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Header from "../../src/app/components/header/header";

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
