import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function SignUp() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const signup = (event) => {
    event.preventdefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <Container style={{ height: "100vh" }}>
      <Row>
        <Col>
          <Row>
            <h2>Зарегистрируйте свою учётную запись</h2>
          </Row>
          <form
          // onSubmit={login}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя пользователя"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите Email"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>

            <Button variant="outline-info" onClick={signup}>
              SignUp
            </Button>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SignUp;
