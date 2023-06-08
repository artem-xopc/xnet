import { useEffect, useMemo, useRef, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useFetching } from '../../hooks/useFetching';
import { getPagesCount } from '../../utils/pages';
import UsersService from '../../API/UsersService';
import UsersList from './UsersList';
import Select from '../UI/Select/Select';
import Loader from '../UI/Loader/Loader';
import Pagination from '../UI/Pagination/Pagination';
import us from './Users.module.css';
import { useOberver } from '../../hooks/useObserver';
import UserFilter from './UsersFilter';
import { useUsers } from '../../hooks/useUsers';
import Search from '../UI/Search/Search';

const UsersM = (props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [fetchUsers, isUsersLoading, userError] = useFetching(async (limit, page) => {
    const response = await UsersService.getAllUsers(limit, page);
    setUsers([...users, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchUsers(limit, page);
  }, [limit, page]);

  return (
    <Container>
      <Row className={us.wrapper}>
        <Col>
          {userError && <h1>Произошла ошибка {userError}</h1>}

          {isUsersLoading ? (
            <Loader />
          ) : (
            <UsersList
              users={users}
              follow={props.follow}
              unfollow={props.unfollow}
              totalPages={totalPages}
              totalCount={totalCount}
              page={page}
              setCurrentPage={props.setCurrentPage}
              // remove={removeUser}
            />
          )}

          <Row>
            <Col></Col>
            {/* <Col><div ref={infFeed} style={{backgroundColor: "#fff"}} /></Col> */}
            <Col></Col>
          </Row>

          {/* {isUsersLoading && (
            <div>
              <Loader />
            </div>
          )} */}
        </Col>
        <Col>
          <Row className="mb-3">{/* <UserFilter filter={filter} setFilter={setFilter} /> */}</Row>
          <Row>
            {/* <Select value={limit} onChange={value => setLimit(value)} defaultValue="Выберите количество выводимых пользователей" 
            options={[
              {value: 5, name: "05 пользователей"},
              {value: 10, name: "10 пользователей"},
              {value: 15, name: "15 пользователей"},
              {value: -1, name: "Показать всех пользователей"},
            ]} /> */}
          </Row>
        </Col>
        <Pagination
          currentPage={page}
          // changePage={changePage}
          totalPages={totalPages}
        />
      </Row>
    </Container>
  );
};

export default UsersM;
