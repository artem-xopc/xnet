import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setFetchingStatus,
  setPage,
  setTotalCount,
  setUsers,
  unFollow,
} from '../../redux/user_reducer';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import UsersList from './UsersList';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`,
      )
      .then((response) => {
        this.props.setFetchingStatus(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  setCurrentPage = (pageNumber) => {
    this.props.setPage(pageNumber);
    this.props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalCount}`,
      )
      .then((response) => {
        this.props.setFetchingStatus(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <UsersList
            key={this.props.users.id}
            users={this.props.users}
            totalCount={this.props.totalCount}
            totalPages={this.props.totalPages}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPage={this.setCurrentPage}
          />
        )}
      </>
    );
  }
}

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
