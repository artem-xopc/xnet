import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../icons/logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Pages/MainPage/Main.jsx";
import Articles from "../Pages/ArticlesPage/Articles.jsx";
import About from "../Pages/AboutPage/About.jsx";
import News from "../Pages/NewsPage/News.jsx";

const NavBar = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand to="/">
          <Nav.Link as={Link} to="/">
          <img
              src={logo}
              height="50"
              width="50"
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
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Поиск"
                className="me-sm-2"
              />
              <Button variant="outline-warning">Поиск</Button>
            </Form>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
      </div>
    </div>
  );
};

export default NavBar;
