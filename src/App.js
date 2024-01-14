import "./App.css";

import { Container, Row, Col } from "reactstrap";
import WeatherData from "./WeatherData";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <WeatherData />
        </Row>
      </Container>
    </div>
  );
}

export default App;
