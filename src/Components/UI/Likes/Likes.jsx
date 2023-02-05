import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import dislike from "../../../icons/dislike.png";
import like from "../../../icons/like.png";

const Likes = () => {
  const [likes, setLikes] = useState(0)

  let likeCount = likes;
  
  let likeInc = () => {
    setLikes(likes + 1);
  };

  let likeDec = () => {
    setLikes(likes - 1);
  }
  return (
    <Container>
      <Row className="mr-5">
        <Col>
          {likeCount}
          <Button variant="outline-secondary" className="m-1" size="sm" onClick={likeInc}>
            <img src={like} />
          </Button>
          <Button variant="outline-secondary" className="m-1" size="sm" onClick={likeDec}>
            <img src={dislike} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Likes;
