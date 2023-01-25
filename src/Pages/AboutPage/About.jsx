import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import BasicInfo from "../../Components/AboutComponents/BasicInfo";
import MainText from "../../Components/AboutComponents/MainText";
import js from "../../icons/js.jpeg";

const About = (props) => {
  return (
    <div>
      <h1>Обо мне</h1>
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          bg="dark"
        >
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
                  <Row>
                    <Col>
                      <BasicInfo />
                    </Col>
                    <Col sm={8}>
                      <MainText text={props.text} />
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
