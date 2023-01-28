import {Row, Col, Container } from "react-bootstrap";
import { Comment } from "../Comments/CommentForm/Comment";
import { CommentList } from "../Comments/CommentForm/CoomentList";

const BlogPost = (props) => {
  return (
    <Container>
      <Row className="mt-5" style={{textAlign: 'center'}}>
        <Col>
          <h5><strong>{props.tittle}</strong></h5>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>{props.post}</p>
        </Col>
      </Row>
      <Row>
        <Comment />
        <CommentList />
      </Row>
    </Container>
  );
};

export default BlogPost;
