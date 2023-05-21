import { Button, Col, Container, Form, InputGroup, Nav, Row } from 'react-bootstrap';
import us from './Users.module.css';
import userAva from '../../styles/images/avatars/users_ava3.png';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

function UserItem({ user, remove, follow, unfollow }) {
  const router = useNavigate();

  return (
    <Container className={us.item}>
      <Row>

        <Nav.Link as={Link} to={"/profile/" + user.id}>
          <img src={userAva} className={us.ava} />
        </Nav.Link>

        <Col md="auto">

          <Row>Основная информация:</Row>
          <Row>id: {user.id}</Row>
          <Row>Имя: {user.name}</Row>

          <Row>
            <Col mt={3}>
              {user.followed ? (
                <Button variant="outline-secondary" onClick={() => unfollow(user.id)}>
                  Вы подписаны
                </Button>
              ) : (
                <Button variant="outline-info" onClick={() => follow(user.id)}>
                  Подписаться
                </Button>
              )}
              <Button
                variant="outline-warning"
                onClick={() => router(`/user/${user.id}`)}
                style={{ marginLeft: '5px' }}>
                Открыть профиль
              </Button>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Container>
  );
}

export default UserItem;
