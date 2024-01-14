import { Row, Col, Container } from "reactstrap";

const RightComponentInfo = (props) => {
  return (
    <Container className="info-parent">
      <Row className="title-description">
        <Col xs="12" className="my-3">
          <div>{props.title}</div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="image-container">
            <img className="image" src={props.imageLink}></img>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="time-container">
            <span className="number-data mx-1 my-1">{props.numberData}</span>
            <span className="meta-description my-1">{props.unit}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RightComponentInfo;
