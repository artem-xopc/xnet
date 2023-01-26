import { useState } from "react";
import { Button, Card, Col, Collapse, Container, Nav, Row, Tab } from "react-bootstrap";
import BasicInfo from "../../Components/AboutComponents/BasicInfo";
import MainText from "../../Components/AboutComponents/MainText";

const About = (props) => {
  // получение элементов страницы из локального state
  let textElement = props.state.map(t => <MainText id={t.id} text={t.text} />);
  
  // отслеживание состояния кнопки (используется для раздела "Дополнительно")
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          bg="dark">
          <Row>
            <Col sm={3}>
              <Nav variant="warning" className="flex-column mt-2">
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
                  <Row>
                    <Col>
                      <BasicInfo />
                    </Col>
                    <Col sm={8} style={{marginBottom: "5px"}}>
                      {textElement}
                      <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="interest-collapse-text"
                        aria-expanded={open}>
                        Дополнительно
                      </Button>
                      <div style={{minHeight: '150px'}}>
                        <Collapse in={open} dimension="width">
                          <div id="interest-collapse-text">
                            <Card body style={{width: "400px"}}>
                              <p>Я также веду несколько Telegram каналов, на которых стараюсь публиковать 
                                только самую интересную информацию.</p>
                              <p><a href="https://t.me/log_of_proger" target="_blank">[XProger] </a> | 
                              <a href="https://t.me/+DrL6zHgI_sg4ZWIy" target="_blank"> Proger's literature</a></p>
                            </Card>
                          </div>
                        </Collapse>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
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
