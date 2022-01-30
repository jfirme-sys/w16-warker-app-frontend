import React, { useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L, { LatLngExpression, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'
import { GasStationsContext } from 'providers/gasStationsProvider';
const icon = require('assets/marker-icon.png');
const iconShadow = require('assets/marker-shadow.png');

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent() {
  const { gasStations } = useContext(GasStationsContext)

  const position = [-15.77972, -47.92972] as LatLngExpression
  const [map, setmap] = useState<Map>();
  if (map) {
    map.setView(position);
  }

  return (
    <>
      <MapContainer data-testid="map-component" center={position} zoom={4.5} scrollWheelZoom={true} whenCreated={setmap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          gasStations.map((station) => {
            const long = parseFloat(station.coords.latitude)
            const lat = parseFloat(station.coords.longitude)
            // As coordenadas estão vindo invertidas da API

            return (
              <Marker
                key={station.id}
                position={[lat, long] as LatLngExpression} />

            )
          })
        }

      </MapContainer>
    </>
  );
}

export default MapComponent;