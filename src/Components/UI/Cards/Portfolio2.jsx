import { Button, Card, Col, Row } from "react-bootstrap";
import port2 from "../../../styles/images/card_avatars/port2.png"

export const PortfolioCard_2 = () => {
    return (
      <Card
        style={{
          width: "25rem",
          minHeight: "10rem",
          backgroundColor: "rgb(32, 36, 43)",
          border: "1px solid rgb(171 178 191)",
          color: "rgb(171 178 191)",
        }}
        className="mt-3"
      >
        <Card.Img variant="top" src={port2} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="https://artem-xopc.github.io/witcher_parallax/">
              2. Wicher parallax scroll
            </Card.Link>
          </Card.Title>
          <Card.Text>
            Небольшой слайдер с параллакс эффектом и встроенным визуальным эффектом в виде случайно перемещающихся частиц света.
          </Card.Text>
          <Row>
            <Col>
              <Button variant="outline-warning">
                <Card.Link
                  href="https://artem-xopc.github.io/witcher_parallax/"
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
                  href="https://github.com/artem-xopc/witcher_parallax"
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