import { Container, Row, Col } from "reactstrap";
import "./RightContainer.css";
import RightComponentInfo from "./RightComponentInfo";
import PresentData from "./PresentData";
import { useWeatherData } from "./WeatherDataProvider";
import MissingInfo from "./MissingInfo";

const RightContainer = () => {
  const { weatherData } = useWeatherData();

  return (
    <Container className="h-100">
      <Row className="main-right-component">
        <Col xs="12">
          <div className="main-right-component">Today's Highlight</div>
        </Col>
      </Row>
      <Row>
        <Col className="my-2"></Col>
      </Row>
      <div>
        <Row className="cards border-design">
          <Col xs="3" className="right-sub-component">
            <div>
              <RightComponentInfo
                title="Wind Status"
                imageLink="https://cdn-icons-png.flaticon.com/64/9424/9424565.png"
                numberData={
                  weatherData.windSpeed != null ? weatherData.windSpeed : "-"
                }
                unit="km/h"
              />
            </div>
          </Col>

          <Col xs="3" className="right-sub-component">
            <div>
              <RightComponentInfo
                title="Sunrise"
                imageLink="https://cdn-icons-png.flaticon.com/64/7246/7246563.png"
                numberData={
                  weatherData.sunrise != null ? weatherData.sunrise : "-"
                }
                unit="AM"
              />
            </div>
          </Col>

          <Col xs="3" className="right-sub-component">
            <div>
              <RightComponentInfo
                title="Sunset"
                imageLink="https://cdn-icons-png.flaticon.com/64/3222/3222795.png"
                numberData={
                  weatherData.sunset != null ? weatherData.sunset : "-"
                }
                unit="PM"
              />
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col className="my-1"></Col>
      </Row>

      {weatherData.humidity ? (
        <div>
          <Row className="cards border-design">
            <Col xs="3" className="right-sub-sub-component">
              <div>
                <PresentData
                  title="Humidity"
                  numberData={
                    weatherData.humidity != null ? weatherData.humidity : "-"
                  }
                  unit="%"
                  remark={`The current reading indicates that the Dew point is ${(
                    weatherData.temp -
                    (100 - weatherData.humidity) / 5
                  ).toFixed(1)}°C right now`}
                />
              </div>
            </Col>

            <Col xs="3" className="right-sub-sub-component">
              <div>
                <PresentData
                  title="Visibility"
                  numberData={
                    weatherData.visibility != null
                      ? (weatherData.visibility / 1000).toFixed(1)
                      : "-"
                  }
                  unit="km"
                  remark="Haze is affecting visiblity hence it has reduced to this level"
                />
              </div>
            </Col>

            <Col xs="3" className="right-sub-sub-component">
              <div>
                <PresentData
                  title="Feels like"
                  numberData={
                    weatherData.feelsLike != null
                      ? weatherData.feelsLike.toString().split(".")[0]
                      : "-"
                  }
                  unit="°C"
                  remark={
                    weatherData.feelsLike >= weatherData.temp
                      ? "Humidity is making it feel hotter than the actual temperature"
                      : "Colder wave is making it feel colder than actual temperature"
                  }
                />
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <MissingInfo />
      )}
    </Container>
  );
};

export default RightContainer;
