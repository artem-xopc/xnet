import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Users from "../../../Pages/Users/Users";
import a from "./Atoms.module.css"

const Work = () => {
  return (
    <Container >
      <Row className={a.portfolioWrapper}>
        <Col>Портфолио и опыт работы.</Col>
      </Row>
      <Row>
        <Col>Работа с API</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-warning">
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
