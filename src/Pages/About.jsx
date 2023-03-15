import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Work from "../Components/AboutComponents/Portfolio";
import AboutContainer from "../Components/AboutComponents/AboutContainer";
import BlogContainer from "../Components/BlogComponents/BlogContainer";
import "./styles/main.css";

const About = (props) => {
  return (
    <div>
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          bg="dark">
          <Row>
            <Col sm={3}>
              <Nav className="flex-column mt-2">
                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="first" style={{ color: "white" }}>
                    Основные сведения
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="second" style={{ color: "white" }}>
                    Портфолио и опыт работы
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav__item">
                  <Nav.Link eventKey="third" style={{ color: "white" }}>
                    Блог
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <AboutContainer />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Work />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <BlogContainer />
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
