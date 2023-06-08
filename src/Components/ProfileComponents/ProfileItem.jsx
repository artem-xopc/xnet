import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFetching } from '../../hooks/useFetching';
import UsersService from '../../API/UsersService';
import { useNavigate, useParams } from 'react-router-dom';
import userAva from '../../styles/images/avatars/users_ava3.png';
import us from '../UsersComponents/Users.module.css';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';

const ProfileItem = (props) => {
  const [user, setUser] = useState({});
  const params = useParams();

  const router = useNavigate();

  const [fetchUserById, isLoading, userError] = useFetching(async (id) => {
    const response = await UsersService.getUserById(id);
    setUser(response.data);
  });

  useEffect(() => {
    fetchUserById(params.id);
  }, []);

  return (
    <Container>
      {userError && <h4>Произошла ошибка -_- {userError}</h4>}
      {isLoading ? (
        <Loader />
      ) : (
        <Row className={us.profile__main}>
          <Row>
            <h3>Основная информация</h3>
          </Row>

          <Row>
            <img src={userAva} className={us.ava} />
          </Row>
          <Row>ID пользователя: {user.id}</Row>
          <Row>Username: {user.username}</Row>
          <Row style={{ marginBottom: '15px' }}>Имя пользователя: {user.name}</Row>
          <Row>Статус пользователя: {'@*$!)%&#)@!'}</Row>
          <Row>Уровень пользователя: 22 </Row>
          {/* <Row>Обо мне: </Row> */}

          <Col style={{ marginTop: '15px' }}>
            <Button variant="outline-info" onClick={() => router('/users')}>
              Вернуться
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProfileItem;
