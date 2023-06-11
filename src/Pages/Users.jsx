import { Container, Row } from 'react-bootstrap';
// import UsersContainer from '../Components/UsersComponents/UsersContainer';
// import UsersM from '../Components/UsersComponents/UsersM';
import UsersContainerArchive from '../Components/UsersComponents/UsersContainerArchive';

const Users = () => {
  return (
    <Container>
      <Row>
        <UsersContainerArchive />
        {/* <UsersM /> */}
      </Row>
    </Container>
  );
};

export default Users;
