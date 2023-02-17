import { Container, Row } from "react-bootstrap";
import UsersContainer from "../UsersComponents/UsersContainer";

const Users = () => {
  return (
    <Container>
      <Row>
        <UsersContainer />
      </Row>
    </Container>
  );
};

export default Users;
