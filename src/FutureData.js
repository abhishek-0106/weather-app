import { Row, Col, Container } from "reactstrap";
import { useWeatherData } from "./WeatherDataProvider";
import moment from "moment";
import MissingInfo from "./MissingInfo";

const FutureData = () => {
  const { weatherData } = useWeatherData();

  const dateFromEpoch = (epoch) => {
    const momentObject = moment.unix(epoch);
    return momentObject.format("dddd MMMM D YYYY h:mm:ss a z").split(" ");
  };

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

  return (
    <div>
      {weatherData.forecastData != null ? (
        <Container>
          <Row>
            <Col xs="3" className="my-3">
              <span>
                <img
                  src={
                    weatherData.forecastData != null &&
                    imageCorrespondingToId(
                      weatherData.forecastData[0].weather[0].id,
                      32
                    )
                  }
                  alt=" ----"
                ></img>
              </span>
            </Col>

            <Col xs="3" className="my-3">
              <span className="big coloring-text">
                {weatherData.forecastData != null
                  ? weatherData.forecastData[0].main.temp_max.toFixed(1)
                  : ""}
                °C/
              </span>
              <span className="small">
                {weatherData.forecastData != null
                  ? (weatherData.forecastData[0].main.temp_min - 3).toFixed(1)
                  : ""}
                °C
              </span>
              <span className="small mx-4">
                {weatherData.forecastData != null
                  ? dateFromEpoch(weatherData.forecastData[0].dt)[0]
                  : ""}
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs="3" className="my-2">
              <span className="forecast-img">
                <img
                  src={
                    weatherData.forecastData != null &&
                    imageCorrespondingToId(
                      weatherData.forecastData[1].weather[0].id,
                      32
                    )
                  }
                  alt=" ----"
                ></img>
              </span>
            </Col>

            <Col xs="3" className="my-2">
              <span className="big coloring-text">
                {weatherData.forecastData != null
                  ? weatherData.forecastData[1].main.temp_max.toFixed(1)
                  : ""}
                °C/
              </span>
              <span className="small">
                {weatherData.forecastData != null
                  ? (weatherData.forecastData[1].main.temp_min - 3).toFixed(1)
                  : ""}
                °C
              </span>
              <span className="small mx-4">
                {weatherData.forecastData != null
                  ? dateFromEpoch(weatherData.forecastData[1].dt)[0]
                  : ""}
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs="3" className="my-2">
              <span className="forecast-img">
                <img
                  src={
                    weatherData.forecastData != null &&
                    imageCorrespondingToId(
                      weatherData.forecastData[2].weather[0].id,
                      32
                    )
                  }
                  alt=" ----"
                ></img>
              </span>
            </Col>

            <Col xs="3" className="my-2">
              <span className="big coloring-text">
                {weatherData.forecastData != null
                  ? weatherData.forecastData[2].main.temp_max.toFixed(1)
                  : ""}
                °C/
              </span>
              <span className="small">
                {weatherData.forecastData != null
                  ? (weatherData.forecastData[2].main.temp_min - 3).toFixed(1)
                  : ""}
                °C
              </span>
              <span className="small mx-4">
                {weatherData.forecastData != null
                  ? dateFromEpoch(weatherData.forecastData[2].dt)[0]
                  : ""}
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs="3" className="my-2">
              <span className="forecast-img">
                <img
                  src={
                    weatherData.forecastData != null &&
                    imageCorrespondingToId(
                      weatherData.forecastData[3].weather[0].id,
                      32
                    )
                  }
                  alt=" ----"
                ></img>
              </span>
            </Col>

            <Col xs="3" className="my-2">
              <span className="big coloring-text">
                {weatherData.forecastData != null
                  ? weatherData.forecastData[3].main.temp_max.toFixed(1)
                  : ""}
                °C/
              </span>
              <span className="small">
                {weatherData.forecastData != null
                  ? (weatherData.forecastData[3].main.temp_min - 3).toFixed(1)
                  : ""}
                °C
              </span>
              <span className="small mx-4">
                {weatherData.forecastData != null
                  ? dateFromEpoch(weatherData.forecastData[3].dt)[0]
                  : ""}
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs="3" className="my-1">
              <span className="forecast-img">
                <img
                  src={
                    weatherData.forecastData != null &&
                    imageCorrespondingToId(
                      weatherData.forecastData[4].weather[0].id,
                      32
                    )
                  }
                  alt=" ----"
                ></img>
              </span>
            </Col>

            <Col xs="3" className="my-1">
              <span className="big coloring-text">
                {weatherData.forecastData != null
                  ? weatherData.forecastData[4].main.temp_max.toFixed(1)
                  : ""}
                °C/
              </span>
              <span className="small">
                {weatherData.forecastData != null
                  ? (weatherData.forecastData[4].main.temp_min - 3).toFixed(1)
                  : ""}
                °C
              </span>
              <span className="small mx-4">
                {weatherData.forecastData != null
                  ? dateFromEpoch(weatherData.forecastData[4].dt)[0]
                  : ""}
              </span>
            </Col>
          </Row>
        </Container>
      ) : (
        <MissingInfo />
      )}
    </div>
  );
};

export default FutureData;
