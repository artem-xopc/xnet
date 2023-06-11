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
import Users_SNJS_Service from '../../API/Users_SNJS_Service';
import { useFetching } from '../../hooks/useFetching';
import { useState } from 'react';
import { getPagesCount } from '../../utils/pages';

const UsersContainer = async (props) => {
  // const [fetchUsers, isUsersLoading, userError] = useFetching(async (totalCount, currentPage) => {
  //   const response = await Users_SNJS_Service.getAllUsers(totalCount, currentPage);
  //   props.setUsers([...props.users, ...response.data]);
  //   const resultCount = response.headers['x-total-count'];
  //   setTotalPages(getPagesCount(resultCount, totalCount));
  // });

  // const response = async () => {
  //   await axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.totalCount}`,
  //     )
  //     .then((res) => {
  //       props.setFetchingStatus(false);
  //       props.setUsers(res.data.items);
  //       props.setTotalCount(res.data.totalCount);
  //     });
  // };

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
