const BASE_URL = "https://nominatim.openstreetmap.org";

export async function geocodeAddress(address) {
  try {
    const res = await fetch(
      `${BASE_URL}/search?format=json&q=${encodeURIComponent(address)}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      },
    );

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const first = data[0];

    return {
      lat: Number(first.lat),
      lng: Number(first.lon),
      displayName: first.display_name,
    };
  } catch (err) {
    console.error("Geocode error:", err);
    return null;
  }
}

export async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(
      `${BASE_URL}/reverse?format=json&lat=${lat}&lon=${lng}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      },
    );

    const data = await res.json();

    if (!data || !data.display_name) {
      return null;
    }

    return {
      address: data.display_name,
      raw: data,
    };
  } catch (err) {
    console.error("Reverse geocode error:", err);
    return null;
  }
}
