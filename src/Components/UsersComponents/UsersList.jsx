import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import UserItem from './UserItem';

const UsersList = ({
  totalCount,
  totalPages,
  users,
  follow,
  unfollow,
  remove,
  page,
  setCurrentPage,
}) => {
  if (!users.length) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Пользователи не были обнаружены -_-</h3>
      </div>
    );
  }

  //пагинация
  let pagesCount = Math.ceil(totalCount / totalPages);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // карусель пагинации
  let currentPage = page;
  let currentPageFirst = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageLast = currentPage + 5;
  let slicedPageArr = pages.slice(currentPageFirst, currentPageLast);

  return (
    <Container fluid>
      <Col>
        <Row className="mt-3">
          {slicedPageArr.map((p) => {
            return (
              <Col className="m-1">
                {page === p ? (
                  <Button variant="outline-warning" className="m-1">
                    {p}
                  </Button>
                ) : (
                  <Button variant="outline-info" className="m-1" onClick={(e) => setCurrentPage(p)}>
                    {p}
                  </Button>
                )}
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            {users.map((user, index) => (
              <UserItem
                key={user.id}
                user={user}
                follow={follow}
                unfollow={unfollow}
                number={index + 1}
                remove={remove}
              />
            ))}
          </Col>
          <Col>
            {/* <Row>
              <InputGroup size="sm" className="mt-3" bg="000">
                <InputGroup.Text id="inputGroup-sizing-sm">Поиск</InputGroup.Text>
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
            </Row> */}
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default UsersList;
