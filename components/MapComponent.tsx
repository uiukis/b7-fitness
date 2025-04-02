"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

interface MapProps {
  position: [number, number];
}

export default function MapComponent({ position }: MapProps) {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      fadeAnimation
      zoomControl={false}
      minZoom={15}
      maxZoom={18}
      className="relative w-full md:w-1/3 h-1/2 md:h-4/5 border-4 border-[#FF6A00] rounded-3xl z-40 "
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Unidade localizada aqui! <br />
          <a
            href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold underline"
          >
            📌 Ver no Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
