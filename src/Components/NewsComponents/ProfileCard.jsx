import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar from '../../icons/js.png'
import lit from '../../icons/lit.jpg'
import '../styles.css'

export const ProfileCard = (props) => {
    return (
        <Card style={{ width: '15rem' }} className="mt-3">
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

export const TelegramCard = (props) => {
  return (
    <Card style={{ width: '15rem' }} className="mt-3">
    <Card.Img variant="top" src={lit} />
    <Card.Body>
      <Card.Title><Card.Link href="https://t.me/log_of_proger">Proger's literature</Card.Link></Card.Title>
      <Card.Text>
        Telegram канал, в котором вы найдёте полезные ресурсы для разработки. 
      </Card.Text>
      <Button variant="outline-warning"><Card.Link href="https://t.me/+DrL6zHgI_sg4ZWIy" className="none_dec">Перейти в канал</Card.Link></Button>
    </Card.Body>
  </Card>
)
}
