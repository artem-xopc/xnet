import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addPostCreator, updatePostCreator } from "../../redux/state";

const Blog = (props) => {
  let newTittle = React.createRef();
  let newPost = React.createRef();


  // let addTittle = () => {
  //   let tittleMessage = newTittle.current.value; 
  //   props.addPost(tittleMessage)
  // }

  let addPost = () => {
    debugger
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch(updatePostCreator(text));
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
    </Container>
  );
};

export default Blog;
