import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./WeatherData.css";
import Info from "./Info";
import RightContainer from "./RightContainer";
import FutureData from "./FutureData";
import PollutionData from "./PollutionData";

function WeatherData() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Row className="my-2">
        <Col xs="12"></Col>
      </Row>

      <div style={{ marginRight: "-3.5rem" }}>
        <Row style={{ height: "45vh" }}>
          <Col xs="3" className="card-background">
            <div>
              <Info />
            </div>
          </Col>
          <Row className="mx-1">
            <Col xs="12"></Col>
          </Row>

          <Col xs="8" className="upper-card-background">
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <RightContainer />
            </div>
          </Col>
        </Row>
      </div>

      <Row className="vertical-space" style={{ marginRight: "-4rem" }}>
        <Col xs="3" className="my-1 mx-2 description-text">
          <p>5 days Forecast</p>
        </Col>

        <Col xs="8" className="my-1 mx-2 description-text">
          <p>Pollution Related data</p>
        </Col>
      </Row>

      <Row style={{ height: "35vh", marginRight: "-4rem" }}>
        <Col xs="3" className="card-background">
          <FutureData />
        </Col>
        <Row className="mx-1">
          <Col xs="12"></Col>
        </Row>
        <Col xs="8" className="card-background">
          <PollutionData />
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherData;
