import { Button, Col, Row } from "react-bootstrap";
import userAva from "../../icons/users_ava3.png";
import us from "./Users.module.css";

const UsersList = ({users, follow, unfollow}) => {
    return (
        <div>
          {users.map((u) => (
            <Row className={us.item}>
              <Col>
                <Row>
                  <img src={userAva} className={us.ava} />
                </Row>
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
              <Col>
                Основная инфа
                <Col>
                  <Row>{u.name}</Row>
                  <Row>{u.username}</Row>
                </Col>
                <Col>
                  <Row>{u.website}</Row>
                </Col>
              </Col>
            </Row>
          ))}
        </div>
    )
}

export default UsersList;