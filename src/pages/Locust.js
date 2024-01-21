import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Locust() {
  const point = [30.27168127601383, 70.83242851242301];
  const [locustPoints, setLocusPoints] = useState([point]);

  const [center, setCenter] = useState(point);

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
