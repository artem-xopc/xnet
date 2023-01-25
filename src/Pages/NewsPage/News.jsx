import { Col, Container, Row } from "react-bootstrap";
import Post from "../../Components/NewsComponents/Post";
import ProfileCard from "../../Components/NewsComponents/ProfileCard";
import "./main.css";

const News = (props) => {
  let tittleElement = props.posts.map(t => <Post id={t.id} tittle={t.tittle} message={t.message} />)

  return (
    <Container fluid>
      <Row>
        <h1>Новости</h1>
        <Col>
          <ProfileCard />
        </Col>
        <Col sm={8}>
          {tittleElement}
        </Col>
        <Col>Самые свежие новости, ссылки на крутые проекты и много другое в телеграм канале [XProger]</Col>
      </Row>
    </Container>
  );
};

export default News;
