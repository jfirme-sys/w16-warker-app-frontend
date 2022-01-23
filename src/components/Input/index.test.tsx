import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Input from '.'

function setup() {
  render(<Input placeholder="Test" onChange={() => { }} />)
}

describe("Search Input", () => {
  it("should be display search input box", () => {
    setup();

    const input = screen.getByTestId('input-box')

    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle({
      display: "flex", alignItems: "center"
    })
  });

  it("should be display input", () => {
    setup();

    const searchInput = screen.getByTestId('input')

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveStyle({
      background: "#fff",
      borderRadius: "14px 0 0 14px",
      width: "420px",
    })
  });
});