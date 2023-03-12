import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import avatar from "../../styles/images/card_avatars/xproger.jpg";
import lit from "../../styles/images/card_avatars/lit.jpg";
// import "../styles.css";

export const ProfileCard = (props) => {
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
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>
          <Card.Link href="https://t.me/log_of_proger">[XProger]</Card.Link>
        </Card.Title>
        <Card.Text>
          Telegram-канал, посвящённый программированию и Web-разработке. На
          канале публикуются интересные гайды, новости из мира IT и многое
          другое.
        </Card.Text>
        <Button variant="outline-warning">
          <Card.Link
            href="https://t.me/log_of_proger"
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
