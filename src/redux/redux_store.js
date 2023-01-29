import { combineReducers, legacy_createStore } from "redux";
import aboutReducer from "./about_reducer";
import newsReducer from "./news_reducer";

let rootReducers = combineReducers({
    about: aboutReducer,
    news: newsReducer,
})

const store = legacy_createStore(rootReducers);

export default store;