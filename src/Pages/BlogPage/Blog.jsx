import { Col, Container, Row } from "react-bootstrap";
import Post from "../../Components/BlogPost";
import ProfileCard from "../../Components/ProfileCard";
import "./main.css";

const Blog = () => {
  return (
    <Container fluid>
      <Row>
        <h1>Страница моего блога</h1>
        <Col> 
          <ProfileCard />
        </Col>
        <Col sm={8}>
          <Post />
        </Col>
        <Col>3 of 1</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <Post />
        </Col>
        <Col>3 of 1</Col>
      </Row>
    </Container>
  );
};

export default Blog;
