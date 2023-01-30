import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MyPosts = (props) => {
  let newTittle = React.createRef();
  let newPost = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let textTittle = newTittle.current.value;
    let text = newPost.current.value;
    props.updateNewPostText(textTittle, text);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Col >
              <Form.Control
                as="textarea"
                ref={newTittle}
                value={props.newTittleText}
                size="lg"
                rows={1}
                type="text" 
                className="mt-3"
                placeholder="Заголовок..."
              ></Form.Control>
            </Col>
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
            <Row>
              <Col>
                <Button
                  variant="outline-warning"
                  className="mt-3"
                  onClick={addPost}
                >Опубликовать</Button>
              </Col>
              <Col>
                <Form.Group controlId="formFileSm" className="mt-3">
                  <Form.Control type="file" size="sm" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPosts;
