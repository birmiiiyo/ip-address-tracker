import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents, Popup } from 'react-leaflet';
import { LocationIcon } from './customMarker';
import { isEmpty } from 'lodash';
import 'leaflet/dist/leaflet.css';

import './Map.scss';
export default function Map() {
  const data = useSelector((state) => state.data.data);

  const position = {
    lat: isEmpty(data) === false ? data.location.lat : 53.89769,
    lng: isEmpty(data) === false ? data.location.lng : 27.549419,
  };

  function CenterMap(coords) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  function LocationMarker() {
    const [position, setPosition] = React.useState({
      lat: 53.89769,
      lng: 27.549419,
    });
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition({ lat: data.location.lat, lng: data.location.lng });
        map.flyTo(position, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={LocationIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
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
        <LocationMarker />
      </MapContainer>
      {/* <CenterMap coords={position} /> */}
    </div>
  );
}
