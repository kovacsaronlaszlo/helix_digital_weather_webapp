const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCurrentCity = async (lat: number, long: number) => {
  try {
    if (API_KEY !== undefined) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Something not ok");
      }
      const data = await response.json();
      return data;
    } else {
      throw new Error("Something whent wrong with API_KEY!");
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchOtherCity = async () => {
  try {
    if (API_KEY !== undefined) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Something not ok");
      }
      const data = await response.json();
      return data;
    } else {
      throw new Error("Something whent wrong with API_KEY!");
    }
  } catch (error) {
    console.error(error);
  }
};
