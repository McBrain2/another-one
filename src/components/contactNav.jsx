import "../styles/contactsNav.css";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const ContactNav = ({ contactCount, searchState, handleSearch }) => {
  const [search, setSearch] = searchState;

  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} sm={12}>
          <Form className="d-flex shiftDown">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
            <Button variant="outline-success searchBtn">Search</Button>
          </Form>
        </Col>
        <Col>
          <h5 className="contactcount shiftDown">{`All Contacts ${contactCount.length}`}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactNav;
