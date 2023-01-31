import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import Post from "../Post";
import { ProfileCard, TelegramCard } from "../ProfileCard"

const NewsPosts = (props) => {
    let ITElement = props.news.news.newsIT.map((i) => (
        <Post id={i.id} tittle={i.tittle} message={i.message} />
      ));
    let gamesElement = props.news.news.newsGames.map((g) => (
        <Post id={g.id} tittle={g.tittle} message={g.message} />
      ));
    let techElement = props.news.news.newsTech.map((t) => (
        <Post id={t.id} tittle={t.tittle} message={t.message} />
      ));
    let otherElement = props.news.news.newsOther.map((o) => (
        <Post id={o.id} tittle={o.tittle} message={o.message} />
      ));
    return (
        <Container fluid>
        <Row>
          <Col>
            <ProfileCard />
          </Col>
          <Col sm={7}>
            <Tabs
              fill
              defaultActiveKey="IT"
              id="controlled-tab-example"
              className="mt-3"
            >
              <Tab eventKey="IT" title="Новости IT">
                <Col sm={14}>{ITElement}</Col>
              </Tab>
              <Tab eventKey="games" title="Новости из мира игр">
                <Col sm={14}>{gamesElement}</Col>
              </Tab>
              <Tab eventKey="tech" title="Новости высоких технологий">
                <Col sm={14}>{techElement}</Col>
              </Tab>
              <Tab eventKey="other" title="Другое">
                <Col sm={14}>{otherElement}</Col>
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <TelegramCard />
          </Col>
        </Row>
      </Container>
    )
}

export default NewsPosts;