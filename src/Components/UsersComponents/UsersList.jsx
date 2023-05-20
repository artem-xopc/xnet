import { Button, Col, Container, Row } from "react-bootstrap";
import UserItem from "./UserItem";

const UsersList = ({ users, follow, unfollow, remove }) => {
  if (!users.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Пользователи не были обнаружены -_-</h3>
      </div>
    );
  }

  return (
    <Container fluid>
      {users.map((user, index) => (
        <UserItem 
        key={user.id} 
        user={user} 
        follow={follow} 
        unfollow={unfollow}
        number={index + 1}
        remove={remove} 
        />
      ))}
    </Container>
  );
};

export default UsersList;
