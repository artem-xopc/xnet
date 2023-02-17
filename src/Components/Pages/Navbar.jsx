import {
  Button,
  Container,
  // Form,
  // FormControl,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../icons/logo.png";
import Main from "./Main";
import News from "./News";
import Articles from "./Articles";
import About from "./About";
import Blog from "./Blog";
import Users from "./Users";
import Login from "./Login";
import SignUp from "./SignUp";
import AppRouter from "../routes/AppRouter";

const NavBar = (props) => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        style={{ borderBottom: "1px solid rgb(171 178 191)" }}
      >
        <Container>
          <NavbarBrand to="/">
            <Nav.Link as={Link} to="/">
              <img
                src={logo}
                height="30"
                width="200"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Nav.Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Главная
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                Новости
              </Nav.Link>
              <Nav.Link as={Link} to="/articles">
                Статьи
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Обо мне
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Блог
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                style={{backgroundColor: "#000", border: "none", color: "rgb(171 178 191)"}}
                type="text"
                placeholder="Поиск"
                className="me-sm-2"
              />
            </Form> */}
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-info" style={{ marginRight: "3px" }}>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-warning">Sign Up</Button>
            </Nav.Link>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <div>
        <AppRouter/>
      </div>
    </div>
  );
};

export default NavBar;
