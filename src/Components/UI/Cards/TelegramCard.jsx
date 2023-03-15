import { Button, Card, Col, Row } from "react-bootstrap";
import lit from "../../../styles/images/card_avatars/lit.jpg";

export const TelegramCard = (props) => {
    return (
      <Card
        style={{
          width: "15rem",
          backgroundColor: "rgb(32, 36, 43)",
          border: "1px solid rgb(171 178 191)",
          color: "rgb(171 178 191)",
        }}
        className="mt-3"
      >
        <Card.Img variant="top" src={lit} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="https://t.me/log_of_proger">
              Proger's literature
            </Card.Link>
          </Card.Title>
          <Card.Text>
            Telegram канал, в котором вы найдёте полезные ресурсы для разработки.
          </Card.Text>
          <Button variant="outline-warning">
            <Card.Link
              href="https://t.me/+DrL6zHgI_sg4ZWIy"
              target="_blank"
              className="none_dec"
            >
              Перейти в канал
            </Card.Link>
          </Button>
        </Card.Body>
      </Card>
    );
  };