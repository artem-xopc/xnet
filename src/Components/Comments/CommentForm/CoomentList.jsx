import { Col, Container, Row } from "react-bootstrap";

export const CommentList = (props) => {
  return (
    <Container>
        <Row className="mt-2" style={{textAlign: "center"}}><h6>Комментарии:</h6></Row>
      <Row>
        <Col>user_name</Col>
      </Row>
      <Row>
        <Col>
            {props.body}
        </Col>
      </Row>
    </Container>
  );
};
