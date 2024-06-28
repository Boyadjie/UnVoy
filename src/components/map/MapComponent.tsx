import React, {useRef, FC} from 'react';

import {MapContainer, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const MapComponent: FC = () => {
  const mapRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <MapContainer
        zoomControl={false}
        center={[35.5, 138.45]}
        zoom={11}
        style={{height: '100%', width: '100%'}}
        ref={(el) => {
          if (el) {
            mapRef.current = el;
          }
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
};

export default MapComponent;
