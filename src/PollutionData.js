import { Row, Col, Container } from "reactstrap";
import { useWeatherData } from "./WeatherDataProvider";

const PollutionData = () => {
  const { weatherData } = useWeatherData();

  const colorForAQILevel = (level) => {
    let color = "";
    switch (level) {
      case 1:
        color = "#0DD107";
        break;
      case 2:
        color = "#F9F20E";
        break;
      case 3:
        color = "#FA871B";
        break;
      case 4:
        color = "#F73B35";
        break;
      case 5:
        color = "#990B0B";
        break;
    }
    return color;
  };

  const textForAQILevel = (level) => {
    let levelName = "";

    switch (level) {
      case 1:
        levelName = "Good";
        break;
      case 2:
        levelName = "Fair";
        break;
      case 3:
        levelName = "Moderate";
        break;
      case 4:
        levelName = "Poor";
        break;
      case 5:
        levelName = "Very Poor";
        break;
      default:
        levelName = "--";
    }
    return levelName;
  };

  const descriptionForAQILevel = (level) => {
    let descriptionText = "";
    switch (level) {
      case 1:
        descriptionText =
          "Air quality is satisfactory, and air pollution poses little or no risk.";
        break;
      case 2:
        descriptionText =
          "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
        break;
      case 3:
        descriptionText =
          "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
        break;
      case 4:
        descriptionText =
          "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
        break;
      case 5:
        descriptionText =
          "Health alert: The risk of health effects is increased for everyone. Everyone should stay indoors.";
        break;
      default:
        descriptionText = "Enter location to get AQI details and warnings";
    }
    return descriptionText;
  };

  return (
    <div>
      <Row className="h-100 my-2 mx-2">
        <Col xs="6">
          <Row>
            <Col
              style={{
                fontSize: "xx-large",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              AQI
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                fontSize: "xx-large",
                textAlign: "center",
                fontWeight: "bold",
                color: colorForAQILevel(
                  weatherData.pollutionData != null
                    ? weatherData.pollutionData.aqi
                    : 0
                ),
              }}
              className="my-3"
            >
              {weatherData != null &&
                textForAQILevel(
                  weatherData.pollutionData != null
                    ? weatherData.pollutionData.aqi
                    : 0
                )}
            </Col>
          </Row>

          <Row>
            <Col style={{ display: "flex", textAlign: "justify" }}>
              {weatherData != null &&
                descriptionForAQILevel(
                  weatherData.pollutionData != null
                    ? weatherData.pollutionData.aqi
                    : 0
                )}
            </Col>
          </Row>
        </Col>

        <Col xs="6">
          <Row className="my-4 mx-2">
            <Col style={{ fontSize: "large", fontWeight: "bold" }}>
              Pollution Indicators :
            </Col>
          </Row>

          <Row>
            <Col>
              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>
                  SO<sub>2</sub> :
                </span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.so2
                    : "-"}
                </span>
              </Row>

              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>
                  NO<sub>2</sub> :
                </span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.no2
                    : "-"}
                </span>
              </Row>

              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>
                  PM<sub>10</sub> :
                </span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.pm10
                    : "-"}
                </span>
              </Row>
            </Col>

            <Col>
              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>
                  PM<sub>2.5</sub> :
                </span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.pm2_5
                    : "-"}
                </span>
              </Row>

              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>
                  O<sub>3</sub> :
                </span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.o3
                    : "-"}
                </span>
              </Row>

              <Row className="my-1 mx-2">
                <span style={{ fontWeight: "bold" }}>CO :</span>
                <span className="mx-2">
                  {weatherData.pollutionData != null
                    ? weatherData.pollutionData.co
                    : "-"}
                </span>
              </Row>
            </Col>
          </Row>

          <Row className="my-3 mx-2">
            <span style={{ fontSize: "small" }}>
              <i>
                To know how level of AQI is determined, please visit{" "}
                <a
                  href="https://openweathermap.org/api/air-pollution"
                  target="blank"
                >
                  this
                </a>{" "}
                page.
              </i>
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PollutionData;
