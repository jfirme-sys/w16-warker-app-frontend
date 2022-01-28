import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L, { LatLngExpression, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'
import { GasStationsContext } from 'providers/gasStationsProvider';
import { axiosHttpClient } from 'infra/http/axiosHttpClient';
import { AuthContext } from 'providers/authProvider';
const icon = require('assets/marker-icon.png');
const iconShadow = require('assets/marker-shadow.png');

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent() {
  const { gasStations } = useContext(GasStationsContext)
  const { setLoading, loading } = useContext(AuthContext)
  console.log(gasStations);

  const position = [-15.77972, -47.92972] as LatLngExpression
  const [map, setmap] = useState<Map>();
  if (map) {
    map.setView(position);
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      axiosHttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <MapContainer center={position} zoom={4} scrollWheelZoom={true} whenCreated={setmap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          gasStations.map((station) => {
            const lat = parseFloat(station.coords.latitude)
            const long = parseFloat(station.coords.longitude)

            console.log([lat, long]);

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