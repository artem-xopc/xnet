import { combineReducers, legacy_createStore } from "redux";
import aboutReducer from "./about_reducer";
import newsReducer from "./news_reducer";
import blogReducer from "./blog_reducer";
import userReducer from "./user_reducer";

let rootReducers = combineReducers({
    about: aboutReducer,
    news: newsReducer,
    blog: blogReducer,
    users: userReducer,
})

const store = legacy_createStore(rootReducers);

export default store;