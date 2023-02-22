import { Button, Col, Container, Row } from "react-bootstrap";
import userAva from "../../icons/users_ava3.png";
import us from "./Users.module.css";

const UsersList = ({users, follow, unfollow}) => {
    return (
        <Container fluid>
          {users.map((u) => (
            <Row className={us.item}>
              <Col xs={4}>
                <Row>
                  <Col><img src={userAva} className={us.ava} /></Col>
                </Row>
              </Col>
              <Col>
                  <Row>Основная информация:</Row>
                  <Row>Псевдоним: {u.username},</Row>
                  <Row>Имя: {u.name},</Row>
                  <Row>Сайт: {u.website},</Row>
                <Row>
                  {u.followed ? (
                    <Button
                      variant="outline-secondary"
                      onClick={() => unfollow(u.id)}
                    >
                      Вы подписаны
                    </Button>
                  ) : (
                    <Button
                      variant="outline-info"
                      onClick={() => follow(u.id)}
                    >
                      Подписаться
                    </Button>
                  )}
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
    )
}

export default UsersList;