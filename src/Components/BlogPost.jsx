import React from "react";
import { Container, Row } from "react-bootstrap";
import postImg from "../icons/01010102.jpg";
import "./styles.css";

function Post(props) {
  return (
    <Container fluid>
      <Row>
        <img width="500" height="150" src={postImg} />
      </Row>
      <Row>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ad a suscipit iste sint, incidunt porro, quas possimus facilis animi
        voluptatum soluta quis officiis distinctio corporis commodi sed. Ea,
        velit.
      </Row>
    </Container>
  );
}

export default Post;
