export type CoordType = {
  latitude: number;
  longitude: number;
};

export type Weather = {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
type Coord = {
  lon: number;
  lat: number;
};
type WeatherEntity = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};
type Wind = {
  speed: number;
  deg: number;
};
type Clouds = {
  all: number;
};
type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
