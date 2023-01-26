import { Container, Row, Col } from "react-bootstrap";
import ava from "../../icons/ava.jpg";

const BasicInfo = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={ava} width="150" br="50%" />
          <div>
            <h4>
              <strong>Основная информация</strong>
            </h4>
            <p>- JavaScript программист</p>
            <p>- Возраст: 22 года</p>
            <p>- Пол: мужской</p>
            <p>- Страна проживания: Россия</p>
            <p>- Интересуемая занятость: полная</p>
          </div>
          <div>
            <h4>
              <strong>Технические навыки</strong>
            </h4>
            <p>- Язык программирования: JavaScript;</p>
            <p>
              - Технологии и фреймворки: HTML5, CSS3, ReactJS, NodeJS, система
              контроля версий Git, SASS (SCSS), Bootstrap5;
            </p>
            <p>- Базы данных: MongoDB, PostgreSQL;</p>
            <p>- IDE: VSCode.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BasicInfo;