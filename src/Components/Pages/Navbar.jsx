import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import logo from "../../icons/logo.png";
import AppRouter from "../routes/AppRouter";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const NavBar = (props) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = (event) => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

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
              <Nav.Link as={Link} to="/">Главная</Nav.Link>
              <Nav.Link as={Link} to="/news">Новости</Nav.Link>
              <Nav.Link as={Link} to="/articles">Статьи</Nav.Link>
              <Nav.Link as={Link} to="/about">Обо мне</Nav.Link>
              <Nav.Link as={Link} to="/shop">Магазин</Nav.Link>
            </Nav>

            {isAuth ? (
              <Button variant="outline-warning" onClick={logout}>LogOut</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-info">Login</Button>
              </Nav.Link>
            )}

            {/* <Nav.Link as={Link} to="/login">
              <Button variant="outline-warning">Sign Up</Button>
            </Nav.Link> */}
          </NavbarCollapse>
        </Container>
      </Navbar>
      <AppRouter />
    </div>
  );
};

export default NavBar;
