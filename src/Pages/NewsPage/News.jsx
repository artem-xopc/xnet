import { Col, Container, Row } from "react-bootstrap";
import Post from "../../Components/BlogComponents/BlogPost";
import ProfileCard from "../../Components/BlogComponents/ProfileCard";
import "./main.css";

const News = () => {
  return (
    <Container fluid>
      <Row>
        <h1>Новости</h1>
        <Col>
          <ProfileCard />
        </Col>
        <Col sm={8}>
          <Post
            tittle="CD Projekt Red начнёт сотрудничать с волонтёрами-тестировщиками для своих будущих игр"
            message="Польская игровая студия CD Projekt Red организует инициативу Red Playtesting. Она позволит обычным геймерам-энтузиастам тестировать будущие игры."
            likes="25"
          />
        </Col>
        <Col>3 of 1</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <Post
            tittle="Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО"
            message="Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО."
            likes="15"
          />
        </Col>
        <Col>3 of 1</Col>
      </Row>
    </Container>
  );
};

export default News;
