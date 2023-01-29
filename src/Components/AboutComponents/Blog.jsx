import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addPostCreator, updatePostCreator } from "../../redux/about_reducer";
import BlogPost from "./BlogPost";

const Blog = (props) => {
  let newTittle = React.createRef();
  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let textTittle = newTittle.current.value;
    let text = newPost.current.value;
    props.dispatch(updatePostCreator(text, textTittle));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            ref={newTittle}
            value={props.newTittleText}
            size="lg"
            rows={1}
            type="text"
            placeholder="Заголовок..."
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            ref={newPost}
            value={props.newPostText}
            rows={5}
            onChange={onPostChange}
            className="mt-3"
            placeholder="Текст поста..."
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-warning" className="mt-3" onClick={addPost}>
            Опубликовать
          </Button>
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
