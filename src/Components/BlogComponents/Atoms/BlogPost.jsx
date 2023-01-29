import {Row, Col, Container } from "react-bootstrap";
import Likes from "../../Likes";
// import { Comment } from "../Comments/Comment";
// import { CommentList } from "../Comments/CoomentList";

const Posts = (props) => {
  return (
    <Container>
      <Row className="mt-5" style={{textAlign: 'center'}}>
        <Col>
          <h5><strong>{props.tittle}</strong></h5>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>~$ {props.post}</p>
        </Col>
      </Row>
      <Row>
        <Likes />
        {/* <Comment state={props.state} dispatch={props.dispatch} />
        <CommentList state={props.state} /> */}
      </Row>
    </Container>
  );
};

export default Posts;
