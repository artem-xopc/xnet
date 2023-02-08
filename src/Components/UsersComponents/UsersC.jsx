import React from "react";
import axios from "axios";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import userAva from "../../icons/users_ava3.png";
import Select from "../UI/Select/Select";
import us from "./Users.module.css";

class Users extends React.Component {

  constructor (props) {
    super(props);
    axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            this.props.setUsers(response.data);
          });
    };



  render() {
    return (
      <Container>
        <Row className={us.wrapper}>
          <Col>
            <Row sm={2}>
              <Button variant="outline-info" onClick={this.getUsers}>
                Получить пользователей
              </Button>
            </Row>
            <Row sm={3}>
              <InputGroup size="sm" className="mt-3" bg="000">
                <InputGroup.Text id="inputGroup-sizing-sm">Поиск</InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </Row>
            {/* <Row>
              <Select
                options={[
                  { value: "name", name: "По имени" },
                  { value: "username", name: "По user_name" },
                ]}
              />
            </Row> */}
          </Col>
          <Col>
            {this.props.users.map((u) => (
              <Row className={us.item}>
                <Col>
                  <Row>
                    <img src={userAva} className={us.ava} />
                  </Row>
                  <Row>
                    {u.followed ? (
                      <Button
                        variant="outline-secondary"
                        onClick={() => this.props.unfollow(u.id)}
                      >
                        Вы подписаны
                      </Button>
                    ) : (
                      <Button
                        variant="outline-info"
                        onClick={() => this.props.follow(u.id)}
                      >
                        Подписаться
                      </Button>
                    )}
                  </Row>
                </Col>
                <Col>
                  Основная инфа
                  <Col>
                    <Row>{u.name}</Row>
                    <Row>{u.username}</Row>
                  </Col>
                  <Col>
                    <Row>{u.website}</Row>
                  </Col>
                </Col>
              </Row>
            ))}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
};

export default Users;
