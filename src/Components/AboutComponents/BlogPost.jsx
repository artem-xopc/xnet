import {Row, Col, Container } from "react-bootstrap";

const BlogPost = () => {
  return (
    <Container>
      <Row className="mt-5" style={{textAlign: 'center'}}>
        <Col>
          <strong>Заголовок гипотетического поста</strong>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Текст гипотетического поста</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
