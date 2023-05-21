import React from 'react';
import axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    debugger
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  setCurrentPage = (pageNumber) => {
    debugger;
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalCount}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return <Users
    users={this.props.users}
    totalCount={this.props.totalCount}
    totalPages={this.props.totalPages}
    currentPage={this.props.currentPage}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    setCurrentPage={this.setCurrentPage}
    />
  }
}

export default UsersAPIComponent;
