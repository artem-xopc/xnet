import { Container, Row } from 'react-bootstrap';
import userAva from '../../styles/images/avatars/skull1.jpg';
import us from '../UsersComponents/Users.module.css';

const InitialProfile = () => {
  const initialProfile = {
    userId: 0,
    name: 'Artem',
    username: 'Artem Xopc',
    status: '*!&#)%^%!*$(!_(!*%#^!',
    level: 22,
    about: 'Вечно потеющий в муках и ищущий новое. Front-end разработчик',
  };

  return (
    <Container>
      <Row>
        <h3>Основная информация</h3>
      </Row>
      <Row>
        <img src={userAva} className={us.ava} />
      </Row>
      <Row>ID пользователя: {initialProfile.userId}</Row>
      <Row>Username: {initialProfile.username}</Row>
      <Row style={{ marginBottom: '15px' }}>Имя пользователя: {initialProfile.name}</Row>
      <Row>Статус пользователя: {initialProfile.status}</Row>
      <Row>Уровень пользователя: {initialProfile.level} </Row>
      <Row>Обо мне: {initialProfile.about}</Row>
    </Container>
  );
};

export default InitialProfile;
