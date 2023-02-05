const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: Date.now,
      followed: false,
      user_name: "Xopc",
      email: "",
      password: "",
    },
    {
      id: Date.now,
      followed: false,
      user_name: "Retro",
      email: "",
      password: "",
    },
    {
      id: Date.now,
      followed: false,
      user_name: "CiHAr",
      email: "",
      password: "",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: true};
            };
            return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: false};
            }
            return u;
        })
      };
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default userReducer;
