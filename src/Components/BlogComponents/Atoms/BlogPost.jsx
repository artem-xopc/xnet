import { Row, Col, Container } from "react-bootstrap";
import Likes from "../../Likes";
// import { Comment } from "../Comments/Comment";
// import { CommentList } from "../Comments/CoomentList";

const Posts = (props) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col></Col>
        <Col sm={6}>
          <Row>
            <Col>
              <h5 style={{ textAlign: "center" }}>
                <strong>{props.tittle}</strong>
              </h5>
              <p>~$ {props.post}</p>
            </Col>
          </Row>
          <Row>
            <Likes />
            {/* <Comment state={props.state} dispatch={props.dispatch} />
        <CommentList state={props.state} /> */}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Posts;
