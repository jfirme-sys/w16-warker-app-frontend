import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchInput from '.'

function setup() {
  render(<SearchInput />)
}

describe("Search Input", () => {
  it("should be display search input box", () => {
    setup();

    const searchInputBox = screen.getByTestId('search-input-box')

    expect(searchInputBox).toBeInTheDocument();
    expect(searchInputBox).toHaveStyle({
      display: "flex", alignItems: "center"
    })
  });

  it("should be display input", () => {
    setup();

    const searchInput = screen.getByTestId('search-input')

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveStyle({
      background: "#fff",
      borderRadius: "14px 0 0 14px",
      width: "420px",
    })
  });
});