import React from 'react';
import { connect } from 'react-redux';
import { followAC, setFetchingStatusAC, setPageAC, setTotalCountAC, setUsersAC, unFollowAC,} from '../../redux/user_reducer';
import Users from './Users';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';

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
          <Users
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

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (currentPage) => {
      dispatch(setPageAC(currentPage));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    setFetchingStatus: (isFetching) => {
      dispatch(setFetchingStatusAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
