import { Button, Col, Row } from "react-bootstrap";
import us from "./Users.module.css";
import userAva from "../../icons/users_ava3.png";

function UserItem ({user, remove, follow, unfollow}) {
    return (
        <Row className={us.item}>
          <Col xs={4}>
            <Row>
              <Col>
                <img src={userAva} className={us.ava} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>Основная информация:</Row>
            <Row>id: {user.id}</Row>
            <Row>Псевдоним: {user.username},</Row>
            <Row>Имя: {user.name},</Row>
            <Row>Сайт: {user.website},</Row>
            <Row>
              {user.followed ? (
                <Button
                  variant="outline-secondary"
                  onClick={() => unfollow(user.id)}
                >
                  Вы подписаны
                </Button>
              ) : (
                <Button variant="outline-info" onClick={() => follow(user.id)}>
                  Подписаться
                </Button>
              )}
            </Row>
          </Col>
        </Row>
    )
};

export default UserItem;