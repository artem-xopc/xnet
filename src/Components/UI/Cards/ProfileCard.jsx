import { Button, Card, Col, Row } from "react-bootstrap";
import avatar from "../../../styles/images/card_avatars/xproger.jpg"

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