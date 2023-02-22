import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import UsersService from "../API/UsersService";
import UsersList from "./UsersList";
import Search from "../UI/Search/Search";
import Select from "../UI/Select/Select";
import Loader from "../UI/Loader/Loader";
import Pagination from "../UI/Pagination/Pagination";
import us from "./Users.module.css";

const Users = ({
  users,
  currentPage,
  follow,
  unfollow,
  setUsers,
  setPageAC,
  totalCount /* totalPages */,
}) => {
  // const [users, setUsers] = useState([])
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const infFeed = useRef();

  const [fetchUsers, isUsersLoading, userError] = useFetching(
    async (limit, page) => {
      const response = await UsersService.getAllUsers(limit, page).then(
        (response) => {
          setUsers([...users, ...response.data]);
        }
      );
      const resultCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(resultCount, limit));
    }
  );

  useEffect(() => {
    fetchUsers(limit, page);
  }, [limit, page]);

  let changePage = (user) => {
    setPage(user);
  };

  return (
    <Container>
      <Row className={us.wrapper}>
        <Col>
          <UsersList users={users} follow={follow} unfollow={unfollow} />

          <div ref={infFeed} />

          {isUsersLoading && (
            <div>
              <Loader />
            </div>
          )}
        </Col>
        <Col>
          <Row>
            <Search />
          </Row>
          <Row>
            <Select value={limit} onChange={value => setLimit(value)} defaultValue="Выберите количество выводимых пользователей" options={[
              {value: 5, name: "05 пользователей"},
              {value: 10, name: "10 пользователей"},
              {value: 15, name: "15 пользователей"},
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

export default Users;
