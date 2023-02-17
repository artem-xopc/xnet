import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import UsersService from "../API/UsersService";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../UI/Pagination/Pagination";
import Select from "../UI/Select/Select";
import us from "./Users.module.css";
import UsersList from "./UsersList";

const Users = ({users, currentPage, follow, unfollow, setUsers, setPage, totalCount, totalPages}) => {

  // const [users, setUsers] = useState([]) 
  const [ispage, setIsPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const infFeed = useRef()
  

  const [fetchUsers, isUsersLoading, userError] = useFetching (
    async (limit, page) => {
      const response = await UsersService.getAllUsers(limit, page);
      setUsers(response.data)
      const totalCount = response.headers["x-total-count"]
      totalPages(totalCount, limit)
    }
  )
  useEffect(() => {
    fetchUsers(limit, ispage);
  }, [limit, ispage])

  let changePage = (user) => {
    setPage(user)
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
          <UsersList 
          users={users}
          follow={follow} 
          unfollow={unfollow} 
          />
          <div ref={infFeed} />
        </Col>
        <Col></Col>
        <Pagination 
        currentPage={currentPage}
        changePage={changePage}
        totalPages={totalPages}
        />
      </Row>
    </Container>
  );
}

export default Users;


  // let getUsers = () => {
  //   if (props.users.length === 0) {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => {
  //         props.setUsers(response.data);
  //       });
  //   }
  // };