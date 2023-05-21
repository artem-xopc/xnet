const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE"; 
const SET_COUNT = "SET-COUNT"; 

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   user_photo: "../icons/users_ava3.png",
    //   username: "Xopc",
    //   status: "Грокнул вселенную",
    //   email: "t**t@m**l.com",
    //   password: "",
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   username: "Retro",
    //   status: "Грокнул вселенную",
    //   email: "t**t2@m**l.com",
    //   password: "",
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   username: "CiHAr",
    //   status: "Грокнул вселенную",
    //   email: "t**t3@m**l.com",
    //   password: "",
    // },
  ],
  totalCount: 10,
  totalPages: 1,
  currentPage: 1,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }; 
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_PAGE:
      return {...state, currentPage: action.currentPage};
      case SET_COUNT:
        return {...state, count: action.totalCount};
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageAC = (currentPage) => ({type: SET_PAGE, currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_COUNT, count: totalCount});

export default userReducer;
