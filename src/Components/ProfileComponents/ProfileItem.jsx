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
import InitialProfile from './InitialProfile';

const ProfileItem = (props) => {
  const [profile, setProfile] = useState({});
  const router = useNavigate();
  const params = useParams();

  debugger;

  const [fetchProfileById, isProfileLoading, profileError] = useFetching(async (id) => {
    const proResponse = await Users_SNJS_Service.getUserById(id);
    setProfile(proResponse.data);
  });

  useEffect(() => {
    fetchProfileById(params.id);
  }, {});

  return (
    <Container>
      <Row className={us.profile__main}>
        {profileError ? (
          <div>
            <h4>Произошла ошибка при загрузке профиля: {profileError}</h4>
            <InitialProfile />
            <Col style={{ marginTop: '15px' }}>
              <Button variant="outline-info" onClick={() => router('/users')}>
                Вернуться
              </Button>
            </Col>
          </div>
        ) : (
          <div>
            <Row>
              <h3>Основная информация</h3>
            </Row>
            {isProfileLoading ? (
              <Loader />
            ) : (
              <div>
                {profile.photos === null ? (
                  <Row>
                    <img src={profile.photos.large} className={us.ava} />
                  </Row>
                ) : (
                  <Row>
                    <img src={userAva} className={us.ava} />
                  </Row>
                )}

                <Row>ID пользователя: {profile.userId}</Row>
                <Row style={{ marginBottom: '15px' }}>Username: {profile.fullName}</Row>
                {/* <Row>Поиск работы: {profile.lookingForAJob}</Row> */}
                <Row>Интерес к работе: {profile.lookingForAJobDescription}</Row>

                {profile.status === undefined ? (
                  <Row>Статус пользователя: {'@*$!)%&#)@!'}</Row>
                ) : (
                  <Row>Статус пользователя: {profile.status}</Row>
                )}

                {profile.level === undefined ? (
                  <Row>Уровень пользователя: 0 </Row>
                ) : (
                  <Row>Уровень пользователя: {profile.level} </Row>
                )}

                {profile.about !== undefined ? (
                  <Row>Обо мне: {'**)(%?&(%)&(!@$#&)$*?!*'}</Row>
                ) : (
                  <Row>Обо мне: {profile.aboutMe}</Row>
                )}

                <Row>Контакты:</Row>
                {/* {profile.contacts.map((con) => (
                  <div>
                    <Row>- {con.vk}</Row>
                    <Row>- {con.facebook}</Row>
                    <Row>- {con.instagram}</Row>
                    <Row>- {con.github}</Row>
                  </div>
                ))} */}
              </div>
            )}

            <Col style={{ marginTop: '15px' }}>
              <Button variant="outline-info" onClick={() => router('/users')}>
                Вернуться
              </Button>
            </Col>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default ProfileItem;
