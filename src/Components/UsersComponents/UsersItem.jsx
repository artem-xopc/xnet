import { Button, Col, Container, Row } from "react-bootstrap";
import userAva from "../../icons/users_ava3.png";
import us from "./Users.module.css";

const UsersItem = (props) => {
  debugger
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col style={{ height: "100vh" }}>
          {props.users.map((u) => (
            <Row className={us.item}>
              <Col>
                <Row>
                  <img src={userAva} className={us.ava} />
                </Row>
                <Row>
                  {u.followed
                  ? <Button variant="outline-info" onClick={() => props.unfollow(u.id)}>Вы подписаны</Button>
                  : <Button variant="outline-info" onClick={() => props.follow(u.id)}>Подписаться</Button>
                  }
                </Row>
              </Col>
              <Col>
                Основная инфа
                <Col>
                  <Row>{u.user_name}</Row>
                  <Row>{u.status}</Row>
                </Col>
                <Col>
                  <Row>{u.email}</Row>
                </Col>
              </Col>
            </Row>
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default UsersItem;
