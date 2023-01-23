import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ava from "../icons/avatar.jpg";
import js from "../icons/js.jpeg";

const About = () => {
  return (
    <div>
      <h1>Обо мне</h1>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" bg="dark">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item variant="dark">
                  <Nav.Link eventKey="first">Основные сведения</Nav.Link>
                </Nav.Item>
                <Nav.Item variant="dark">
                  <Nav.Link eventKey="second">Образование</Nav.Link>
                </Nav.Item>
                <Nav.Item variant="dark">
                  <Nav.Link eventKey="third">Опыт работы</Nav.Link>
                </Nav.Item>
                <Nav.Item variant="dark">
                  <Nav.Link eventKey="fourth">Портфолио и другое</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={ava} width="150" br="50" />
                  <div>
                    <p>
                      Я, Junior JavaScript Frontend Developer, обладающий всеми
                      необходимыми навыками для успешного ведения деятельности в
                      IT сфере. Пишу код с 2020-го года. Моя цель как
                      разработчика – это постоянное развитие профессиональных
                      качеств, приобретение новых навыков, знаний и умений в web
                      разработке. У меня присутствуют навыки разработки на
                      нативном JavaScript, а также есть опыт в вёрстке web
                      страниц. Ко всему прочему имею опыт разработки серверной
                      части проектов. Мои навыки помогут компании реализовать
                      необходимые проекты в области web разработки. Я легко
                      обучаюсь новым навыкам, люблю и умею работать в команде, а
                      также умею слушать конструктивную критику, принимать и
                      исполнять указанные ошибки.
                    </p>
                    <p>Основная информация:</p>
                    <p>- JavaScript программист</p>
                    <p>- Возраст: 22 года</p>
                    <p>- Пол: мужской</p>
                    <p>- Страна проживания: Россия</p>
                    <p>- Интересуемая занятость: полная</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={js} width="700" />
                  <p className="mt-3">
                    Обучался самостоятельно по статьям в Интернете и видео на
                    YouTube. Также решал задачи на LeetCode и CodeWars. Для
                    наиболее полного изучения JavaScript мной была изучена книга
                    Дэвида Флэнагана "JavaScript: Полное руководство". А для
                    понимания реализации алгоритмов я изучил книгу "Грокаем
                    алгоритмы" за авторством Адитьи Бхаргава. Результатами моего
                    изучения основных алгоритмов стало небольшое Web приложение,
                    которое Вы найдёте по этой ссылке: <a href='/'>Грокаю алгоритмы</a>
                    (находится на этапе разработки).
                  </p>
                  <p>Технические навыки</p>
                  <p>- Язык программирования: JavaScript;</p>
                  <p>- Технологии и фреймворки: HTML5, CSS3, SASS, ReactJS, NodeJS, система контроля версий Git;</p>
                  <p>- Базы данных: MongoDB, PostgreSQL;</p>
                  <p>- IDE: VSCode.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
                <Tab.Pane eventKey="fourth"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default About;
