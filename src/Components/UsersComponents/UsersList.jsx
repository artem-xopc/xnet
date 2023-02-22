import { Button, Col, Container, Row } from "react-bootstrap";
import UserItem from "./UserItem";

const UsersList = ({ users, follow, unfollow }) => {
  if (!users.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Пользователи не были обнаружены -_-</h1>
      </div>
    );
  }

  return (
    <Container fluid>
      {users.map((user) => (
        <UserItem user={user} follow={follow} unfollow={unfollow} />
      ))}
    </Container>
  );
};

export default UsersList;
