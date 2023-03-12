import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Artistic from "./Artistic";
import a from "./Atoms.module.css";

const Work = () => {
  return (
    <Container>
      <Row className={a.portfolioWrapper}>
        <Col>Примеры моих работ (Художественные примеры).</Col>
      </Row>
      <Row>
        <Artistic />
      </Row>
      <Row>
        <Col>Работа с API</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-warning" style={{ marginRight: "5px" }}>
            <Nav.Link as={Link} to="/users">
              Страница пользователей
            </Nav.Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
