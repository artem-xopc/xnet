import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import dislike from "../icons/dislike.png";
import like from "../icons/like.png";

const Likes = () => {
  let likeCount = 0;
  return (
    <Container>
      <Row className="mr-5">
        <Col>
          <Button variant="outline-dark" size="sm">
            <img src={like} />
          </Button>
          <Button variant="outline-dark" size="sm">
            <img src={dislike} />
          </Button>
          {likeCount}
        </Col>
      </Row>
    </Container>
  );
};

export default Likes;
