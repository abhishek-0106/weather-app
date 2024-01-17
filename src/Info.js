import "./Info.css";
import { Row, Col, Container } from "reactstrap";
import InfoIcon from "./InfoIcon";
import { useEffect, useRef, useState } from "react";
import { useWeatherData } from "./WeatherDataProvider";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment-timezone";
import MissingInfo from "./MissingInfo";
import Message from "./Message";

const Info = () => {
  const [text, setText] = useState("");
  const { weatherData, setWeatherData } = useWeatherData();
  const dataFetched = useRef(false);

  const imageCorrespondingToId = (id, size) => {
    let imageURL = "";
    switch (true) {
      case id === 800:
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/3222/3222800.png`;
        break;
      case id >= 200 && id <= 232:
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/1779/1779927.png`;
        break;
      case id >= 600 && id <= 622:
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/6251/6251549.png`;
        break;
      case id >= 701 && id <= 781:
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/495/495651.png`;
        break;
      case id >= 801 && id <= 804:
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/6316/6316087.png`;
        break;
      case (id >= 500 && id <= 531) || (id >= 300 && id <= 321):
        imageURL = `https://cdn-icons-png.flaticon.com/${size}/1779/1779927.png`;
        break;
      default:
        imageURL = "";
    }
    return imageURL;
  };

  const dateFromEpoch = (epoch, location) => {
    const momentObject = moment.unix(epoch);
    return momentObject.format("dddd MMMM D YYYY h:mm:ss a z").split(" ");
  };

  const updateText = (e) => {
    if (e.key === "Enter") {
      setText(e.target.value);
      console.log(e.target.value);
    }
  };

  useEffect(() => {
    let showToast = true;

    const fetchData = async () => {
      try {
        if (text != "") {
          dataFetched.current = true;
          const apiKey = process.env.REACT_APP_API_KEY;
          const urlToGetLatLon = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=1&appid=${apiKey}`;

          const latLonResponse = await fetch(urlToGetLatLon);
          console.log(latLonResponse);
          const latLonJsonResponse = await latLonResponse.json();

          const lat = latLonJsonResponse[0].lat;
          const lon = latLonJsonResponse[0].lon;

          const urlToGetCurrentData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
          const response = await fetch(urlToGetCurrentData);
          const jsonResponseToGetCurrentData = await response.json();

          const urlToGetForcastData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
          const foreCastDataResponse = await fetch(urlToGetForcastData);
          const jsonResponseToGetForecastData =
            await foreCastDataResponse.json();

          const urlToGetPollutionData = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
          const pollutionDataResponse = await fetch(urlToGetPollutionData);
          const jsonResponseToGetPollutionData =
            await pollutionDataResponse.json();

          const weatherDetails = {};

          weatherDetails.name = jsonResponseToGetCurrentData.name;
          weatherDetails.description =
            jsonResponseToGetCurrentData.weather[0].main;
          weatherDetails.id = jsonResponseToGetCurrentData.weather[0].id;
          weatherDetails.temp = jsonResponseToGetCurrentData.main.temp;
          weatherDetails.feelsLike =
            jsonResponseToGetCurrentData.main.feels_like;
          weatherDetails.humidity = jsonResponseToGetCurrentData.main.humidity;
          weatherDetails.visibility = jsonResponseToGetCurrentData.visibility;
          weatherDetails.windSpeed = jsonResponseToGetCurrentData.wind.speed;
          weatherDetails.sunset = dateFromEpoch(
            jsonResponseToGetCurrentData.sys.sunset,
            text
          )[4].slice(0, -3);
          weatherDetails.sunrise = dateFromEpoch(
            jsonResponseToGetCurrentData.sys.sunrise,
            text
          )[4].slice(0, -3);

          weatherDetails.presentEpoch = dateFromEpoch(
            jsonResponseToGetCurrentData.dt
          );

          const pollutionData = {};

          pollutionData.so2 =
            jsonResponseToGetPollutionData.list[0].components.so2;
          pollutionData.pm2_5 =
            jsonResponseToGetPollutionData.list[0].components.pm2_5;
          pollutionData.no2 =
            jsonResponseToGetPollutionData.list[0].components.no2;
          pollutionData.o3 =
            jsonResponseToGetPollutionData.list[0].components.o3;
          pollutionData.pm10 =
            jsonResponseToGetPollutionData.list[0].components.pm10;
          pollutionData.co =
            jsonResponseToGetPollutionData.list[0].components.co;
          pollutionData.aqi = jsonResponseToGetPollutionData.list[0].main.aqi;

          weatherDetails.pollutionData = pollutionData;

          const forecastData = jsonResponseToGetForecastData.list.filter(
            (data) => data.dt_txt.includes("15:00:00")
          );

          weatherDetails.forecastData = forecastData;

          setWeatherData(weatherDetails);
          if (showToast) {
            toast.success("Data fetched successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      } catch (error) {
        console.log("Error occurred " + error);
        setWeatherData({});

        if (showToast) {
          toast.error("Either location is incorrect or data is not available", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    };

    fetchData();

    return () => {
      showToast = false;
      dataFetched.current = false;
    };
  }, [text]);

  return (
    <Container className="info-parent">
      {dataFetched.current && <Message />}

      <Row className="title-description my-1">
        <Col xs="12">
          <div style={{ display: "flex" }}>
            <InfoIcon className="mx-1" />
            <div className="search-bar">
              <div>
                <input
                  className="search-text"
                  placeholder="Enter Location here"
                  onKeyDown={updateText}
                ></input>
              </div>

              <div>
                <img src="https://cdn-icons-png.flaticon.com/16/10469/10469570.png"></img>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {weatherData.temp != null ? (
        <div>
          <Row className="">
            <Col xs="12">
              <img
                src={imageCorrespondingToId(weatherData.id, 128)}
                alt="Weather details not available"
              ></img>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <p className="number-data">
                {" "}
                {weatherData.temp != null ? weatherData.temp : "--"}°C{" "}
              </p>
              <p
                className="meta-description"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {weatherData.description}
              </p>
            </Col>
          </Row>

          <Row className="meta-description">
            <Col xs="12">
              <p style={{ textAlign: "center" }}>
                {weatherData != null ? weatherData.name : "--"},{" "}
                {weatherData != null && weatherData.presentEpoch != null
                  ? weatherData.presentEpoch[4]
                  : "--"}{" "}
                {weatherData != null && weatherData.presentEpoch != null
                  ? weatherData.presentEpoch[5].toUpperCase()
                  : "--"}
              </p>
            </Col>
          </Row>
        </div>
      ) : (
        <MissingInfo />
      )}
    </Container>
  );
};

export default Info;
