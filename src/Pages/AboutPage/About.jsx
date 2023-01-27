import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import BasicInfo from "../../Components/AboutComponents/BasicInfo";
import Blog from "../../Components/AboutComponents/Blog";
import BlogPost from "../../Components/AboutComponents/BlogPost";
import MainText from "../../Components/AboutComponents/MainText";
import Work from "../../Components/AboutComponents/Portfolio";
import "../main.css"

const About = (props) => {
  // получение элементов страницы из локального state
  let textElement = props.state.info.map((t) => (
    <MainText id={t.id} text={t.text} />
  ));
  let infoElement = props.state.tech_info.map((i) => (
    <BasicInfo id={i.id} text={i.text} tech={i.tech} />
  ));
  let postElement = props.state.posts.map((p) => (
    <BlogPost id={p.id} tittle={p.tittle} post={p.post} />
  ));

  // отслеживание состояния кнопки (используется для раздела "Дополнительно")
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          bg="dark"
        >
          <Row>
            <Col sm={3}>
              <Nav className="flex-column mt-2">
                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="first" style={{color: "white"}}>Основные сведения</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="second" style={{color: "white"}}>Портфолио и опыт работы</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="third" style={{color: "white"}}>Блог</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col>{infoElement}</Col>
                    <Col sm={8} style={{ marginBottom: "5px" }}>
                      {textElement}
                      <Button
                        variant="outline-warning"
                        onClick={() => setOpen(!open)}
                        aria-controls="teleg-collapse-text"
                        aria-expanded={open} >Дополнительно</Button>
                      <div style={{ minHeight: "150px" }}>
                        <Collapse in={open} dimension="width">
                          <div id="teleg-collapse-text">
                            <Card body style={{ width: "500px" }}>
                              <p>
                                Я также веду несколько Telegram каналов, на
                                которых стараюсь публиковать только самую
                                интересную и полезную информацию.
                              </p>
                              <p style={{ textAlign: "end" }}>
                                <a href="https://t.me/log_of_proger" target="_blank" >[XProger]</a> | 
                                <a href="https://t.me/proger_literature" target="_blank"> Proger's literature </a>
                              </p>
                            </Card>
                          </div>
                        </Collapse>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Work />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Blog
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updatePostText={props.updatePostText}
                  />
                  {postElement}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default About;
