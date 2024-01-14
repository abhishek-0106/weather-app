import { createContext, useContext, useState } from "react";
const WeatherDataContext = createContext();

const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

const useWeatherData = () => {
  return useContext(WeatherDataContext);
};

export { WeatherDataProvider, useWeatherData };
