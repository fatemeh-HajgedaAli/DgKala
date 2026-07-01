import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";

// وقتی کلیک میشه
function LocationSelector({ setCoords }) {
  useMapEvents({
    click(e) {
      setCoords({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return null;
}

// برای آپدیت نقشه
function ChangeView({ coords }) {
  const map = useMap();

  useEffect(() => {
    map.setView([coords.lat, coords.lng]);
  }, [coords, map]);

  return null;
}

export default function MapPicker({ onSelect }) {
  const [coords, setCoords] = useState({
    lat: 35.6892,
    lng: 51.389,
  });

  return (
    <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
      <MapContainer
        center={[coords.lat, coords.lng]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LocationSelector setCoords={setCoords} />
        <ChangeView coords={coords} />

        <Marker position={[coords.lat, coords.lng]} />
      </MapContainer>

      <button
        onClick={() =>
          onSelect({
            lat: coords.lat,
            lng: coords.lng,
            address: "Selected location",
          })
        }
        className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
      >
        انتخاب این موقعیت
      </button>
    </div>
  );
}
