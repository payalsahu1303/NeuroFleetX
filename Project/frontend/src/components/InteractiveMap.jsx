// src/components/InteractiveMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

// Optional: OpenWeatherMap API key (if you want to add weather layers later)
// const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

export default function InteractiveMap() {
  // Default center and zoom
  const defaultPosition = [40.7128, -74.0060]; // New York City coordinates
  const defaultZoom = 12;

  // Example markers (you can fetch these from your backend or other APIs)
  const fleetLocations = [
    { id: 1, position: [40.7580, -73.9855], name: 'Vehicle A', status: 'Active' }, // Times Square
    { id: 2, position: [40.7061, -74.0100], name: 'Vehicle B', status: 'Idle' },   // Wall Street
    { id: 3, position: [40.7142, -74.0059], name: 'Vehicle C', status: 'En Route' }, // City Hall
  ];

  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
      <MapContainer
        center={defaultPosition}
        zoom={defaultZoom}
        scrollWheelZoom={true} // Enable zooming with mouse wheel
        className="w-full h-full z-0" // Leaflet map container styles
      >
        {/* OpenStreetMap Tile Layer as the base map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* --- Optional: OpenWeatherMap Weather Layers --- */}
        {/*
        {OPENWEATHER_API_KEY && (
          <>
            <TileLayer
              attribution='Weather data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`}
              opacity={0.5} // Adjust opacity as needed
            />
            {/* Add other layers like pressure, wind, clouds etc.
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`}
              opacity={0.3}
            />
          </>
        )}
        */}

        {/* Fleet Markers */}
        {fleetLocations.map(fleet => (
          <Marker key={fleet.id} position={fleet.position}>
            <Popup>
              <b>{fleet.name}</b><br />Status: {fleet.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* You can still overlay Font Awesome truck icons on top if react-leaflet markers are not enough */}
      {/* However, react-leaflet markers are usually preferred for interactive maps */}
    </div>
  );
}