import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface Location {
  latitude: number;
  longitude: number;
}

interface MapProps {
  locations?: Location[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA6_hjYGVB2AlBkcYjn1-ifDqqsbB6OmLA",
  });

  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const getLocation = async () => {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      const { latitude, longitude } = position.coords;
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (!isLoaded || !currentLocation) {
    return <div>loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ height: "100%", zIndex: "1" }}
      zoom={9}
      center={{
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      }}
      mapContainerClassName="map-container"
    >
      {locations && locations.map((location, index) => (
        <Marker
          key={index}
          position={{
            lat: location.latitude,
            lng: location.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
