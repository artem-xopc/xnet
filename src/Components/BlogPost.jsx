import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import postImg from "../icons/01010102.jpg";
import "./styles.css";

function Post(props) {
  return (
    <Container fluid>
      <Row xs={2} md={4} lg={3}> 
        <Col>
          <img width="250" height="250" src={postImg} />
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ad a suscipit iste sint, incidunt porro, quas possimus
          facilis animi voluptatum soluta quis officiis distinctio corporis
          commodi sed. Ea, velit.
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
