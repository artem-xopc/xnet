import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFetching } from '../../hooks/useFetching';
import UsersService from '../../API/UsersService';
import Loader from '../UI/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import userAva from '../../styles/images/avatars/users_ava3.png';
import us from '../UsersComponents/Users.module.css';

const ProfileItem = (props) => {
  // const [user, setUser] = useState({});
  // const params = useParams();

  const router = useNavigate();

  // const [fetchUserById, isLoading, userError] = useFetching(async (userId) => {
  //   const response = await UsersService.getUserById(userId);
  //   setUser(response.data);
  // });

  // useEffect(() => {
  //   fetchUserById(params.userId);
  // }, [])

  return (
    <Container>
      <Row className={us.profile__main}>

          <Row>
            <h3>Основная информация</h3>
          </Row>
          
          
          <Row><img src={userAva} className={us.ava} /></Row>
          <Row>
            {/* <Row>ID пользователя: {user.userId}</Row> */}
            {/* <Row> Имя пользователя: {user.name}</Row> */}
          </Row>

          <Row>Статус пользователя: </Row>
          <Row>Уровень пользователя: </Row>
          <Row>Обо мне: </Row>

          <Col style={{marginTop: "15px"}}>
            <Button onClick={() => router("/users")}>Вернуться</Button>
          </Col>

        </Row>
    </Container>
  );
};

export default ProfileItem;
