import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Color from "../../UI/ColorPicker/Color";
import BlogPost from "../Atoms/BlogPost"
import mp from "./MyPosts.module.css"

class Posts extends React.Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.props.addPost(response.data);
    });
  }
  postElement = this.props.posts.map((p) => (
    <BlogPost
      key={p.id}
      id={p.id}
      tittle={p.headline}
      post={p.body}
      comments={p.body}
    />
  ));

  newheadline = React.createRef();
  newBody = React.createRef();

  addPost = () => {
    this.props.addPost();
  };
  onPostChange = () => {
    let headline = this.newheadline.current.value;
    let body = this.newBody.current.value;
    this.props.updateNewPostText(headline, body);
  };

  render() {
    return (
      <div>
        <Container variant="dark">
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <Col>
                <Form.Control
                  as="textarea"
                  ref={this.newheadline}
                  size="lg"
                  rows={1}
                  type="text"
                  className={mp.headline}
                  placeholder="Заголовок..."
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  ref={this.newBody}
                  value={this.props.newPostBody}
                  rows={5}
                  onChange={this.onPostChange}
                  className={mp.post}
                  placeholder="Текст поста..."
                ></Form.Control>
              </Col>
              <Row>
                <Col>
                  <Button
                    variant="outline-warning"
                    className="mt-3"
                    onClick={this.addPost}
                  >
                    Опубликовать
                  </Button>
                </Col>
                <Col>
                  <Form.Group controlId="formFileSm" className={mp.filesInput}>
                    <Form.Control type="file" size="sm" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
          <Row>{this.postElement}</Row>
        </Container>
      </div>
    );
  }
}

export default Posts;
