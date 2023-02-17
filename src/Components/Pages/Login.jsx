import { useContext } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event) => {
    event.preventdefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <Container style={{height: "100vh"}}>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user_name</Form.Label>
              <Form.Control type="text" placeholder="Введите имя пользователя" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <Button variant="outline-info">
              <Nav.Link as={Link} to="/main">Login</Nav.Link>
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
