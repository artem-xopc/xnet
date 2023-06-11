import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFetching } from '../../hooks/useFetching';
import UsersService from '../../API/UsersService';
import { useNavigate, useParams } from 'react-router-dom';
import userAva from '../../styles/images/avatars/users_ava3.png';
import us from '../UsersComponents/Users.module.css';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import Users_SNJS_Service from '../../API/Users_SNJS_Service';

const ProfileItem = (props) => {
  debugger;
  const router = useNavigate();

  let profile = {
    userId: 0,
    name: 'Artem',
    username: 'Artem Xopc',
    status: '*!&#)%^%!*$(!_(!*%#^!',
    about: 'Вечно потеющий в муках и ищущий новое. Front-end разработчик',
  };

  return (
    <Container>
      <Row className={us.profile__main}>
        <Row>
          <h3>Основная информация</h3>
        </Row>
        {/* {isLoading ? (
          <Loader />
        ) : ( */}
        <div>
          <Row>
            <img src={userAva} className={us.ava} />
          </Row>
          <Row>ID пользователя: {profile.userId}</Row>
          <Row>Username: {profile.username}</Row>
          <Row style={{ marginBottom: '15px' }}>Имя пользователя: {profile.name}</Row>
          <Row>Статус пользователя: {'@*$!)%&#)@!'}</Row>
          <Row>Уровень пользователя: 22 </Row>
          <Row>Обо мне: {profile.about}</Row>
        </div>
        {/* )} */}

        <Col style={{ marginTop: '15px' }}>
          <Button variant="outline-info" onClick={() => router('/users')}>
            Вернуться
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileItem;
