import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Заголовок"
            ></Form.Control>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col><Form.Control as="textarea" rows={3} placeholder="Пост" className="mt-3"></Form.Control></Col>
      </Row>
      <Row>
      <Col>
          <Button variant="outline-warning" className="mt-3">Запостить!</Button>
        </Col>
        <Col>
          <Form.Group controlId="formFileSm" className="mt-3">
            <Form.Control type="file" size="sm" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
