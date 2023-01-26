import {Row, Col, Container } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <Container>
      <Row className="mt-5" style={{textAlign: 'center'}}>
        <Col>
          <strong>{props.tittle}</strong>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>{props.post}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
