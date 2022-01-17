import { ListGroup, Container, Spinner, Col } from "react-bootstrap";

import badNetwork from "../assets/badNetwork.png";

const Contacts = ({ userDetails, loadingSet, errorSet, searchState }) => {
  const userData = userDetails;
  const loading = loadingSet;
  const error = errorSet;
  const search = searchState;

  // const data = userData.map(({ type }) => type)
  // const filterLogic = !search
  //   ? data
  //   : data.filter((user) =>
  //       user.toLowerCase().startsWith(search.toLowerCase())
  //     );

  //     console.log(filterLogic);

  return (
    <Container className="contacts">
      {loading && (
        <div className="loaders">
          <Spinner animation="grow" size="sm" className="primarySpin spin" />
          <Spinner animation="grow" size="sm" className="secondarySpin spin" />
          <Spinner animation="grow" size="sm" className="tertiarySpin spin" />
        </div>
      )}

      {error && (
        <div className="loaders">
          <div>
            <img src={badNetwork} alt="Bad Network Icon" />
          </div>
        </div>
      )}

      <ListGroup>
        {userData.map(({ name, email, id }) => (
          <ListGroup.Item key={id}>
            <div className="contactDetails">
              <Col>
                <div className="profile"></div>
              </Col>
              <Col>
                <span className="name">
                  {name == null ? "Augustus Shaminga" : name}
                </span>
              </Col>
              <Col>
                <span className="email">
                  {email == null ? "sample@email.com" : email}
                </span>
              </Col>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Contacts;
