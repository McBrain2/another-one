import { Nav, Accordion, Form, Button, Row, Col } from "react-bootstrap";
import "../styles/sideBar.css";

const SideBar = () => {
  return (
    <div className="sideBarStyle">
      <Nav defaultActiveKey="/home" className="flex-column">
        <h5 className="headStyle">Filter By</h5>
      </Nav>

      {/* ==================== Accordion Section ============================= */}
      <Accordion className="accordionStyle" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Include Tags</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Exclude Tags</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="messageFilter">
        {/* ==================== Message Sent ============================= */}
        <Row style={{ margin: "0 0" }}>
          <span>Message Sent:</span>
          <Col>
            <Form.Group className="mb-3 controlStyle" controlId="sentMin">
              <Form.Control size="sm" type="number" placeholder="Min" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 controlStyle" controlId="sentMax">
              <Form.Control size="sm" type="number" placeholder="Max" />
            </Form.Group>
          </Col>
        </Row>

        {/* ==================== Message Recived ============================= */}
        <Row style={{ margin: "0 0" }}>
          <span>Message Recived:</span>
          <Col>
            <Form.Group className="mb-3 controlStyle" controlId="receivedMin">
              <Form.Control size="sm" type="number" placeholder="Min" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 controlStyle" controlId="receivedMax">
              <Form.Control size="sm" type="number" placeholder="Max" />
            </Form.Group>
          </Col>
        </Row>

        {/* ==================== Save Button ============================= */}
        <div className="saveBtnPack">
          <Button id="saveBtn">Save Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
