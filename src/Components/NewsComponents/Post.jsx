import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import postImg from "../../styles/images/articles/binarymap.jpg";
// import "../styles.css";

const Post = (props) => {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col style={{ textAlign: "center" }}>
          <h4>
            <strong>{props.tittle}</strong>
          </h4>
        </Col>
      </Row>
      <Row className="mt-3">
        <img width="250" height="350" src={postImg} alt="Заглушка" />
      </Row>
      <Row className="mt-3">
        <Col>{props.message}</Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Post;
