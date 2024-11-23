import * as React from "react";
import Header from "../../src/app/components/header/header";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

describe("Header Component", () => {
  it("Header should render", async () => {
    const wrapper = render(<Header title="test" links={[]} />);
    expect(await wrapper.findByText("test")).toBeTruthy();
  });
});
