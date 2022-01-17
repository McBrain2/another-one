import "./App.css";
import { Container, Row, Col  } from "react-bootstrap";
import SideBar from "./components/SideBar";
import ContactSection from "./components/contactSection";


function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>
          <SideBar />
        </Col>
        <Col>
          <ContactSection />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
