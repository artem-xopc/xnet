import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselImg from "../Components/UI/Carousel";
import Likes from "../Components/UI/Likes/Likes";
import { ProfileCard } from "../Components/UI/Cards/ProfileCard";
import { TelegramCard } from "../Components/UI/Cards/TelegramCard";

const Main = () => {
  return (
    <div>
      <CarouselImg />
      <Container fluid>
        <Row>
          <Col><ProfileCard /></Col>
          <Col><Nav.Link as={Link} to="/news">Новости</Nav.Link></Col>
          <Col><Nav.Link as={Link} to="/articles">Статьи</Nav.Link></Col>
          <Col><Nav.Link as={Link} to="/about">Обо мне</Nav.Link></Col>
          <Col><TelegramCard /></Col>
        </Row>
        <Row>
          <Col><Likes /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
