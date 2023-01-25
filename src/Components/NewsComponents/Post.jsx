import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import postImg from "../../icons/01010102.jpg";
import Likes from "../Likes";
import "../styles.css";

const Post = (props) => {
  console.log(props)
  return (
    <Container fluid>
      <Row>
        <Col>
          {props.tittle}
        </Col>
      </Row>
      <Row xs={2} md={4} lg={3}> 
        <Col>
          <img width="250" height="250" src={postImg} />
          <Likes />
          {props.likes}
        </Col>
        <Col>
          {props.message}
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default Post