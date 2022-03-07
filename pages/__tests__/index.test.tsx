import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const title = screen.getByTestId("title");

    expect(title).toHaveTextContent("Welcome to Next.js");
    expect(title).toBeInTheDocument();
  });
});
