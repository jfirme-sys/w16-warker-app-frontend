import React, { useContext, useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L, { LatLngExpression, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'
const icon = require('assets/marker-icon.png');
const iconShadow = require('assets/marker-shadow.png');

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent() {
  const position = [0, 0] as LatLngExpression
  const [map, setmap] = useState<Map>();
  if (map) {
    map.setView(position);
  }

  return (
    <>
      {/* <MapContainer center={position} zoom={15} scrollWheelZoom={true} whenCreated={setmap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>

        </Marker>
      </MapContainer> */}
    </>
  );
}

export default MapComponent;