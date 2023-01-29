import {Row, Col, Container } from "react-bootstrap";
import { Comment } from "../Comments/Comment";
import { CommentList } from "../Comments/CoomentList";
import Likes from "../Likes";

const BlogPost = (props) => {
  return (
    <Container>
      {/* <Row className="mt-5" style={{textAlign: 'center'}}>
        <Col>
          <h5><strong>{props.tittle}</strong></h5>
        </Col>
      </Row> */}
      <Row className="mt-5">
        <Col>
          <p>~$ {props.post}</p>
        </Col>
      </Row>
      <Row>
        <Likes />
        <Comment />
        <CommentList />
      </Row>
    </Container>
  );
};

export default BlogPost;
