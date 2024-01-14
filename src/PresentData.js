import { Col, Container, Row } from "reactstrap";

const PresentData = (props) => {
  return (
    <div>
      <Row>
        <Col xs="12" style={{ fontSize: "small" }}>
          {props.title}
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className=""
              style={{
                fontSize: "x-large",
                fontWeight: "bold",
              }}
            >
              {props.numberData}
            </span>
            <span
              className=" mx-1"
              style={{
                fontSize: "small",
                display: "flex",
                alignItems: "center",
              }}
            >
              {props.unit}
            </span>
          </div>
        </Col>

        <Col>
          <div xs="4">
            <span style={{ fontSize: "x-small" }}>{props.remark}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PresentData;
