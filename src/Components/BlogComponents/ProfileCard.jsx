import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar from '../../icons/js.png'
import '../styles.css'

const ProfileCard = (props) => {
    return (
        <Card style={{ width: '15rem' }} className="me-auto">
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title><Card.Link href="https://t.me/log_of_proger">[XProger]</Card.Link></Card.Title>
          <Card.Text>
            Telegram-канал, посвящённый программированию и Web-разработке. 
            На канале публикуются интересные гайды, новости из мира IT и многое другое. 
          </Card.Text>
          <Button variant="outline-warning"><Card.Link href="https://t.me/log_of_proger" className="none_dec">Перейти в канал</Card.Link></Button>
        </Card.Body>
      </Card>
    )
}

const TelegramCard = (props) => {
  return (
    <Card style={{ width: '15rem' }} className="me-auto">
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title><Card.Link href="https://t.me/log_of_proger">[XProger]</Card.Link></Card.Title>
      <Card.Text>
        Telegram-канал, посвящённый программированию и Web-разработке. 
        На канале публикуются интересные гайды, новости из мира IT и многое другое. 
      </Card.Text>
      <Button variant="outline-warning"><Card.Link href="https://t.me/log_of_proger" className="none_dec">Перейти в канал</Card.Link></Button>
    </Card.Body>
  </Card>
)
}

export default ProfileCard;