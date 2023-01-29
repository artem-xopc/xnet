import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addCommentCreator } from "../../redux/about_reducer";

export const Comment = (props) => { 
  debugger
  let newComment = React.createRef();

  let addComment = () => {
    props.dispatch(addCommentCreator());
  };
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
            ref={newComment}
            as="textarea"
            rows={2}
            placeholder="Комментарий..."
            className="mt-3"
          ></Form.Control>
          <Col className="d-inline-block align-right" sm={5}>
            <Button variant="outline-secondary" className="mt-2" onClick={addComment}>
              Отправить
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
