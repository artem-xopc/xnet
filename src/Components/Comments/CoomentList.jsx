import { Col, Container, Row } from "react-bootstrap";

export const CommentList = (props) => {
  debugger
  console.log(props)
//   let commentElement = props.state.about;
  return (
    <Container>
      <Row className="mt-2" style={{ textAlign: "center" }}>
        <h6>Комментарии:</h6>
      </Row>
      <Row>{props.body}</Row>
    </Container>
  );
};
