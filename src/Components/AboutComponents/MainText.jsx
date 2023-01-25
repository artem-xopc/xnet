import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainText = (props) => {
  return (
    <Container>
      <Row>
        <Col>{props.text}</Col>
      </Row>
    </Container>
  );
};

export default MainText;
