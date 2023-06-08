import { connect } from 'react-redux';
import {
  follow,
  setFetchingStatus,
  setPage,
  setTotalCount,
  setUsers,
  unFollow,
} from '../../redux/user_reducer';
import { Col, Container, Row } from 'react-bootstrap';
import UsersList from './UsersList';
import Loader from '../UI/Loader/Loader';
import axios from 'axios';
import UsersService from '../../API/UsersService';

const UsersContainer = async (props) => {
  debugger;

  // const [fetchUsers, isUsersLoading, userError] = useFetching(async (limit, page) => {
  //   const response = await UsersService.getAllUsers(limit, page);
  //   props.setUsers([...props.users, ...response.data]);
  //   const totalCount = response.headers['x-total-count'];
  //   setTotalPages(getPagesCount(totalCount, limit));
  // });

  // const response = await axios
  //   .get(
  //     `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.totalCount}`,
  //   )
  //   .then((res) => {
  //     props.setFetchingStatus(false);
  //     props.setUsers(res.data.items);
  //     props.setTotalCount(res.data.totalCount);
  //   });

  const setCurrentPage = (pageNumber) => {
    props.setPage(pageNumber);
    props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.totalCount}`,
      )
      .then((res) => {
        props.setFetchingStatus(false);
        props.setUsers(res.data.items);
      });
  };

  return (
    <Container>
      {props.isFetching ? (
        <Loader />
      ) : (
        <Row>
          <UsersList
            users={props.users}
            totalCount={props.totalCount}
            totalPages={props.totalPages}
            currentPage={props.currentPage}
            follow={props.follow}
            unfollow={props.unfollow}
            setCurrentPage={setCurrentPage}
          />
        </Row>
      )}

      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalPages: state.usersPage.totalPages,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setPage,
  setTotalCount,
  setFetchingStatus,
})(UsersContainer);
