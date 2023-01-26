import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";

const Blog = () => {
    let newPost = React.createRef()

    let addPost = () => {
        let text = newPost.current.value;
        {alert(text)}
    }

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
        <Col><Form.Control as="textarea" ref={newPost} rows={3} placeholder="Пост" className="mt-3"></Form.Control></Col>
      </Row>
      <Row>
      <Col>
          <Button variant="outline-warning" className="mt-3" onClick={addPost}>Запостить!</Button>
        </Col>
        <Col>
          <Form.Group controlId="formFileSm" className="mt-3">
            <Form.Control type="file" size="sm" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <BlogPost />
      </Row>
    </Container>
  );
};

export default Blog;
