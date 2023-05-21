import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import us from './Users.module.css';
import userAva from '../../styles/images/avatars/users_ava3.png';

const Users = ({users, totalCount, totalPages, currentPage, follow, unfollow, setCurrentPage}) => {
  //пагинация
  let pagesCount = Math.ceil(totalCount / totalPages);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // карусель пагинации
  let currentP = currentPage;
  let currentPageFirst = currentP - 5 < 0 ? 0 : currentP - 5;
  let currentPageLast = currentP + 5;
  let slicedPageArr = pages.slice(currentPageFirst, currentPageLast);

  return (
    <Container>
      <Row className={us.wrapper}>
        <Col>
          <Row sm={3}>
            <InputGroup size="sm" className="mt-3" bg="000">
              <InputGroup.Text id="inputGroup-sizing-sm">Поиск</InputGroup.Text>
              <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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
          {users.map((u) => (
            <Row className={us.item}>
              <Col>
                <Row>
                  <img src={userAva} className={us.ava} />
                </Row>
                <Row>
                  {u.followed ? (
                    <Button variant="outline-secondary" onClick={() => unfollow(u.id)}>
                      Вы подписаны
                    </Button>
                  ) : (
                    <Button variant="outline-info" onClick={() => follow(u.id)}>
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
            {slicedPageArr.map((p) => {
              return (
                <Col className="m-1">
                  {currentPage === p ? (
                    <Button variant="outline-warning" className="m-1">
                      {p}
                    </Button>
                  ) : (
                    <Button
                      variant="outline-info"
                      className="m-1"
                      onClick={(e) => setCurrentPage(p)}>
                      {p}
                    </Button>
                  )}
                </Col>
              );
            })}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
