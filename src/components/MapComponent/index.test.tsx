import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import MapComponent from '.'
import { GasStationsContext } from "providers/gasStationsProvider";

const gasStationMock = [
  {
    id: '1',
    reservatorio: '45',
    coords: {
      latitude: '-41.77251667397009',
      longitude: '-2.9271155542989153'
    },
    updated_at: '2021-03-04T14:28:17.000000Z',
    created_at: '2021-03-04T14:28:17.000000Z'
  }
]

describe("MapComponent", () => {
  it("should be display MapComponent", () => {
    const { container } = render(
      <GasStationsContext.Provider
        value={{ gasStations: gasStationMock }}
      >
        <MapComponent />
      </GasStationsContext.Provider>
    );

    const mapComponent = container.querySelector('.leaflet-container')

    expect(mapComponent).toBeInTheDocument();
  });
});