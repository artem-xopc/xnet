import { connect } from "react-redux";
import { followAC, setPageAC, setUsersAC, unFollowAC } from "../../redux/user_reducer";
// import Users from "./UsersC";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalPages: state.usersPage.totalPages,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);