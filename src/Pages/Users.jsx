import { Container, Row } from 'react-bootstrap';
import UsersContainer from '../Components/UsersComponents/UsersContainer';
import UsersM from '../Components/UsersComponents/UsersExp';

const Users = () => {
  return (
    <Container>
      <Row>
        {/* <UsersContainer /> */}
        <UsersM />
      </Row>
    </Container>
  );
};

export default Users;
