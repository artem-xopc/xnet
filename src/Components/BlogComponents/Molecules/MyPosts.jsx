import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BlogPost from "../Atoms/BlogPost"

const MyPosts = (props) => {
  debugger
  // console.log(props.posts)
  
  let postElement = props.posts.map((p) => (
    <BlogPost key={p.id} id={p.id} tittle={p.headline} post={p.body} comments={p.body} />
  ));

  const [headline, setHeadline] = useState()

  let newHeadline = React.createRef();
  let newBody = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let headline = newHeadline.current.value;
    let body = newBody.current.value;
    props.updateNewPostText(headline, body);
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
                ref={newHeadline}
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
                ref={newBody}
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
        <Row>
        {postElement}
        </Row>
      </Container>
    </div>
  );
};

export default MyPosts;
