import { Button, Card, Col, Row } from "react-bootstrap";
import port3 from "../../../styles/images/card_avatars/port3.png"

export const PortfolioCard_3 = () => {
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
        <Card.Img variant="top" src={port3} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="https://artem-xopc.github.io/stellar_scroll/">
              3. Stellar scroll
            </Card.Link>
          </Card.Title>
          <Card.Text>
            Небольшой слайдер с параллакс эффектом при скролле страницы.
          </Card.Text>
          <Row>
            <Col>
              <Button variant="outline-warning">
                <Card.Link
                  href="https://artem-xopc.github.io/stellar_scroll/"
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
                  href="https://github.com/artem-xopc/stellar_scroll"
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