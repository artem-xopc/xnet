import { connect } from "react-redux";
import { followAC, setPageAC, setTotalCountAC, setUsersAC, unFollowAC } from "../../redux/user_reducer";
import Users from "./UsersC";
// import UsersM from "./UsersM";

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
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);