import { Col, Container, Row } from "react-bootstrap";
import Post from "../../Components/BlogComponents/BlogPost";
import ProfileCard from "../../Components/BlogComponents/ProfileCard";
import "./main.css";

const News = () => {
  let tittleData = [
    {
      id: 1,
      name: "CD Projekt Red начнёт сотрудничать с волонтёрами-тестировщиками для своих будущих игр",
    },
    {
      id: 2,
      name: "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО",
    },
  ];

  let messageData = [
    {
      id: 1,
      name: "Польская игровая студия CD Projekt Red организует инициативу Red Playtesting. Она позволит обычным геймерам-энтузиастам тестировать будущие игры.",
      likes: 11230
    },
    {
      id: 2,
      name: "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО.",
      likes: 15000
    },
  ];

  let tittleElement = tittleData.map(t => <Post id={t.id} tittle={t.name} message={messageData[0].name} />)

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
        <Col>3 of 1</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <Post
            id={tittleData[1].id}
            tittle={tittleData[1].name}
            message={messageData[1].name}
          />
        </Col>
        <Col>3 of 1</Col>
      </Row>
    </Container>
  );
};

export default News;
