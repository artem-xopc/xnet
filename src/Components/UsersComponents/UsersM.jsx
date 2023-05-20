import { useEffect, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useFetching } from "../../hooks/useFetching";
import { getPagesCount } from "../../utils/pages";
import UsersService from "../../API/UsersService";
import UsersList from "./UsersList";
import Select from "../UI/Select/Select";
import Loader from "../UI/Loader/Loader";
import Pagination from "../UI/Pagination/Pagination";
import us from "./Users.module.css";
import { useOberver } from "../../hooks/useObserver";
import UserFilter from "./UsersFilter";
import { useUsers } from "../../hooks/useUsers";
import Search from "../UI/Search/Search";

const UsersM = ({users, follow, unfollow, setUsers}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [filter, setFilter] = useState({sort: "", query: ""});

  // const infFeed = useRef();

  const sortedAndSelectedUser = useUsers(users, filter.sort, filter.query);
  
  // const sortedUsers = useMemo(() => {
  //   if(filter.sort) {
  //     return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  //   }
  //   return users;
  // }, [filter.sort, users]);

  // const sortedAndSelectedUser = useMemo(() => {
  //   return sortedUsers.filter(user => user.username.toLowerCase().includes(filter.query.toLowerCase()))
  // }, [filter.query, sortedUsers]);

  const [fetchUsers, isUsersLoading, userError] = useFetching(
    async (limit, page) => {
      const response = await UsersService.getAllUsers(limit, page);
      setUsers([...users, ...response.data])
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  // useOberver(infFeed, page < totalPages, isUsersLoading, () => setPage(page + 1))

  useEffect(() => {
    fetchUsers(limit, page);
  }, [page, limit]);

  let removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }; 

  let changePage = (user) => {
    setPage(user);
  };

  return (
    <Container>
      <Row className={us.wrapper}>
        <Col>
          {userError && <h4>Произошла ошибка: {userError}</h4>}

          <UsersList 
          users={users} 
          follow={follow} 
          unfollow={unfollow} 
          remove={removeUser} />
          
          <Row>
            <Col></Col>
            {/* <Col><div ref={infFeed} style={{backgroundColor: "#fff"}} /></Col> */}
            <Col></Col>
          </Row>

          {isUsersLoading && (
            <div>
              <Loader />
            </div>
          )}

        </Col>
        <Col>
          <Row className="mb-3">
            <UserFilter filter={filter} setFilter={setFilter} />
          </Row>
          <Row>
            <Select value={limit} onChange={value => setLimit(value)} defaultValue="Выберите количество выводимых пользователей" 
            options={[
              {value: 5, name: "05 пользователей"},
              {value: 10, name: "10 пользователей"},
              {value: 15, name: "15 пользователей"},
              {value: -1, name: "Показать всех пользователей"},
            ]} />
          </Row>
        </Col>
        <Pagination
          currentPage={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </Row>
    </Container>
  );
};

export default UsersM;
