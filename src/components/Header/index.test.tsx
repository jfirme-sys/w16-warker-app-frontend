import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from '.'

function setup() {
  render(<Header />)
}

describe("Header", () => {
  it("should be display Header", () => {
    setup();

    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle({
      display: "flex",
      justifyContent: 'space-between',
    })
  });
});

describe("Logout button", () => {
  it("should be display logout button", () => {
    setup();

    const logoutButton = screen.getByTestId('logout-button')

    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveStyle({
      height: '3.5rem', color: "#FFF"
    })
  });

  it("should be redirect to login screen when i click logout button", () => {
    setup();

    const logoutButton = screen.getByTestId('logout-button')
    logoutButton.click()

    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveStyle({
      height: '3.5rem', color: "#FFF"
    })
    expect(window.location.pathname).toBe('/')
  });
});