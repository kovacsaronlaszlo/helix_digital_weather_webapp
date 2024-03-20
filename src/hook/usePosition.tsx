import { useState, useEffect } from "react";
import { Coord } from "../types/types";

export const usePosition = () => {
  const [position, setPosition] = useState<Coord>({
    lat: 0,
    lon: 0,
  });
  const [error, setError] = useState<string>("");

  const onChange = ({ coords }: { coords: GeolocationCoordinates }) => {
    setPosition({
      lat: coords.latitude,
      lon: coords.longitude,
    });
    localStorage.setItem(
      "position",
      JSON.stringify({
        lat: coords.latitude,
        lon: coords.longitude,
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
