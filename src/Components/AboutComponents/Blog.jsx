import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";

const Blog = (props) => {
  let newTittle = React.createRef();
  let newPost = React.createRef();

  let addPost = () => {
    let tittleMessage = newTittle.current.value;
    props.addPost(tittleMessage);
    // props.addPost(postMessage);
  };

  let onPostChange = () => {
    let postMessage = newPost.current.value;
    props.updatePostText(postMessage);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Заголовок..."
              ref={newTittle}></Form.Control>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            ref={newPost}
            rows={5}
            placeholder="Текст поста..."
            onChange={onPostChange}
            value={props.newPostText}
            className="mt-3"></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-warning" className="mt-3" onClick={addPost}>Опубликовать</Button>
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
