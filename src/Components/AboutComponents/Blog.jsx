import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addPost, updatePost } from "../../redux/state";
import { CommentList } from "../Comments/CommentForm/CoomentList";
import BlogPost from "./BlogPost";


const Blog = (props) => {
  let newTittle = React.createRef();
  let newPost = React.createRef();

  let addPostFunc = () => {
    debugger
    let text = newTittle.current.value; 
    props.dispatch(addPost(text));
  };

  let onPostChangeFunc = () => {
    let text = newPost.current.value;
    props.dispatch(updatePost(text));
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
              ref={newTittle}
              value={props.newTittleText}></Form.Control>
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
            onChange={onPostChangeFunc}
            value={props.newPostText}
            className="mt-3"></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-warning" className="mt-3" onClick={addPostFunc}>Опубликовать</Button>
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
