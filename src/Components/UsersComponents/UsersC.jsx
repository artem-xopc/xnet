import React from "react";
import axios from "axios";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import userAva from "../../styles/images/avatars/users_ava3.png";
import us from "./Users.module.css";
// import Select from "../UI/Select/Select";
// import UsersService from "../../API/UsersService";
// import { useFetching } from "../../hooks/useFetching";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  setCurrentPage = (pageNumber) => {
    debugger
    this.props.setPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalCount}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.totalPages);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <Container>
        <Row className={us.wrapper}>
          <Col>
            <Row sm={3}>
              <InputGroup size="sm" className="mt-3" bg="000">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Поиск
                </InputGroup.Text>
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
          <Col>
          <Col className="mt-3">
          {pages.map((p) => {
            return <div className="m-1">
              {this.props.currentPage === p ? (
                <Button variant="outline-warning" className="m-1">{p}</Button>
              ) : (
                <Button variant="outline-info" className="m-1" onClick={(e) => {this.setCurrentPage(p)}}>
                  {p}
                </Button>
              )}
            </div>
  })}
        </Col>
        </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Users;
