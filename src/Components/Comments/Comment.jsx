import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Comment = (props) => { 
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <strong>user_name</strong>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Комментарий..."
            className="mt-3"
          ></Form.Control>
          <Col className="d-inline-block align-right" sm={5}>
            <Button variant="outline-secondary" className="mt-2 ">
              Отправить
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
