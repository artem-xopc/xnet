import { useContext } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = (props) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventdefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Row className="mt-3">
        <Col>
          <Row>
            <h2>Войдите в свою учётную запись</h2>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <Row>
              <Col>
                <Button variant="outline-info" onClick={login}>
                  Login
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col>
          <h3>Нет учётной записи? </h3>
          <Col>
            <Nav.Link as={Link} to="/signup">
              <Button variant="outline-warning">Зарегистрируйтесь!</Button>
            </Nav.Link>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
