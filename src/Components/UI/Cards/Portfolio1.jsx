import { Button, Card, Col, Row } from "react-bootstrap";
import port1 from "../../../styles/images/card_avatars/port1.jpg"

export const PortfolioCard_1 = () => {
    return (
      <Card
        style={{
          width: "25rem",
          backgroundColor: "rgb(32, 36, 43)",
          border: "1px solid rgb(171 178 191)",
          color: "rgb(171 178 191)",
        }}
        className="mt-3"
      >
        <Card.Img variant="top" src={port1} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="https://artem-xopc.github.io/about-my-book">
              1. "Хранители: Возрождение"
            </Card.Link>
          </Card.Title>
          <Card.Text>
            Сайт с параллакс эффектом, на котором представлено краткое описание
            моей книги. Данный сайт является основой для будущего React
            приложения, в котором будут представлены все мои книги.
          </Card.Text>
          <Row>
            <Col>
              <Button variant="outline-warning">
                <Card.Link
                  href="https://artem-xopc.github.io/about-my-book/"
                  target="_blank"
                  className="none_dec"
                >
                  Перейти на сайт
                </Card.Link>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-warning">
                <Card.Link
                  href="https://github.com/artem-xopc/about-my-book"
                  target="_blank"
                  className="none_dec"
                >
                  Посмотреть код
                </Card.Link>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };