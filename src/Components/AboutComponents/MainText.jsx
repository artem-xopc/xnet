import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainText = (props) => {
  console.log(props);
  // debugger;
  return (
    <Container>
      <Row>
        <Col>{props.message}</Col>
      </Row>
    </Container>
  );
};

export default MainText;
