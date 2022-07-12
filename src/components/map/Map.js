import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { LocationIcon } from './customMarker';

import 'leaflet/dist/leaflet.css';

import './Map.scss';

export default function Map() {
  const data = useSelector((state) => state.data.data);
  console.log(data);

  const position = [
    data.location.lat === undefined ? '53' : data.location.lat,
    data.location.lng === undefined ? '27' : data.location.lng,
  ];

  function CenterMap({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    <div className="map">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '600px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={LocationIcon}>
          <Popup>You are here</Popup>
        </Marker>
        <CenterMap coords={position} />
      </MapContainer>
    </div>
  );
}
