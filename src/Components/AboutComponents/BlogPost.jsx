import {Row, Col, Container } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <Container>
      <Row className="mt-3" style={{textAlign: 'center'}}>
        <Col>
          <h5><strong>{props.tittle}</strong></h5>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>{props.post}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
