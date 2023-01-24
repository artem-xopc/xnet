import { Col, Container, Row } from "react-bootstrap";
import Post from "../../Components/BlogComponents/Post";
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
    {
      id: 3, 
      name: "Logitech сообщила о падении квартальной выручки на 22 % — в ближайшее время ситуация не исправится"
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
    {
      id: 3,
      name: "Крупный производитель компьютерной периферии Logitech International на этой неделе отчитался о результатах третьего фискального квартала (закончился 31 декабря), сообщив о снижении выручки на 22 % в годовом сравнении до $1,27 млрд в соответствии с собственными ожиданиями. Проблемы с поставками компонентов в прошлом квартале возникали из-за локдаунов в Китае, а спрос на продукцию Logitech оставался низким после длительного периода роста."
    }
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
        <Col>Самые свежие новости, ссылки на крутые проекты и много другое в телеграм канале [XProger]</Col>
      </Row>
    </Container>
  );
};

export default News;
