import { useState, useEffect } from "react";
import { CoordType } from "../types/types";

export const usePosition = () => {
  const [position, setPosition] = useState<CoordType>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState<string>("");

  const onChange = ({ coords }: { coords: GeolocationCoordinates }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    localStorage.setItem(
      "position",
      JSON.stringify({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    );
  };
  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    geo.getCurrentPosition(onChange, onError);
    //return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
