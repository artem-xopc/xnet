import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/user_reducer";
import Users from "./UsersC";
import UsersItem from "./UsersItem";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);