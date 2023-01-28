import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import dislike from "../icons/dislike.png";
import like from "../icons/like.png";

const Likes = () => {
  const [likes, setLikes] = useState(false)

  let likeCount = 0;
  let dislikeCount = 0;
  
  let setLike = () => {
    if (setLikes === false) {
      debugger
      setLikes = true;
      likeCount++;
      console.log(likeCount)
    }
  }
  return (
    <Container>
      <Row className="mr-5">
        <Col>
          <Button variant="outline-secondary" className="m-1" size="sm" onClick={setLike()}>
            <img src={like} />
          </Button>
          {likeCount}
          <Button variant="outline-secondary" className="m-1" size="sm">
            <img src={dislike} />
          </Button>
          {dislikeCount}
        </Col>
      </Row>
    </Container>
  );
};

export default Likes;
