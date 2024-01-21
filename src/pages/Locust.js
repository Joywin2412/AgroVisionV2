import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Locust() {
  const [locustPoints, setLocusPoints] = useState([
    [51.505, -0.09],
    [52.505, -0.06],
  ]);

  const [center, setCenter] = useState([51.505, -0.09]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Locust Prediction</h1>
      <div
        style={{
          flex: "1",
        }}
      >
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locustPoints.map((point) => (
            <Marker position={point} color="red">
              <Popup>Possible locust attack</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
