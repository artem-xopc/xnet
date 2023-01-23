import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar from '../icons/avatar.jpg'
import './styles.css'


function ProfileCard(props) {
    return (
        <Card style={{ width: '15rem' }} className="me-auto">
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>Артём Романов</Card.Title>
          <Card.Text>
            Создатель Telegram-канала <Card.Link href="https://t.me/log_of_proger">[XProger]</Card.Link>. Ведущий web-разработчик в компании ООО "Икспрогер". 
          </Card.Text>
          <Button variant="outline-dark"><Card.Link href="https://t.me/log_of_proger">Перейти в канал</Card.Link></Button>
        </Card.Body>
      </Card>
    )
}

export default ProfileCard;