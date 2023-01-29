import { Col, Container, Row } from "react-bootstrap";

export const CommentList = (props) => {
  console.log(props);
  //   let commentElement = props.state.about;
  return (
    <Container>
      <Row className="mt-2" style={{ textAlign: "center" }}>
        <h6>Комментарии:</h6>
      </Row>
      <Row>
        <Col sm={2}>user_name~$</Col>
        <Col>Круто!</Col>
      </Row>
      <Row>
        <Col sm={2}>user_name~$</Col>
        <Col>Замечательно!</Col>
      </Row>
      <Row>
        <Col sm={2}>user_name~$</Col>
        <Col>Я не user_name, где кнопка регистрации?</Col>
      </Row>
    </Container>
  );
};
