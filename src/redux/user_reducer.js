const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   user_photo: "../icons/users_ava3.png",
    //   user_name: "Xopc",
    //   status: "Грокнул вселенную",
    //   email: "t**t@m**l.com",
    //   password: "",
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   user_name: "Retro",
    //   status: "Грокнул вселенную",
    //   email: "t**t2@m**l.com",
    //   password: "",
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   user_name: "CiHAr",
    //   status: "Грокнул вселенную",
    //   email: "t**t3@m**l.com",
    //   password: "",
    // },
  ],
  pageSize: 10,
  totalCount: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default userReducer;
