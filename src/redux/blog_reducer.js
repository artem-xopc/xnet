const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";

const initialState = {
  posts: [
    {
      id: 1,
      body: `Что ж, может быть, отказаться от заголовков - это хорошая идея, посмотрим как будет дальше (28.01.2023).`,
    },
    {
      id: 2,
      headline: `Третий пост недонесталкера`,
      body: `Здравствуй, user_name, как известно, Бог любит троицу, поэтому данный пост является третим захардкоженным в велосипедном state постом.`,
    },
    {
      id: 3,
      headline: `Второй пост недонесталкера`,
      body: `Снова здравствуй, user_name, продолжаю тестировать велосипедный state.`,
    },
    {
      id: 4,
      headline: `Первый пост недонесталкера`,
      body: `Здравствуй, user_name, данный пост является первым, но не единственным постом на данном ресурсе. Тестирую велосипедный state.`,
    },
  ],
  newCommentBody: "",
  newHeadline: "",
  newPostBody: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state, 
        posts: [ { id: 4, headline: state.newHeadline, body: state.newPostBody, likes: 0, }, ...state.posts],
        newHeadline: "",
        newPostBody: "",
      }
    case UPDATE_POST: 
      return {
        ...state,
        newHeadline: action.newTtext,
        newPostBody: action.newPText,
      }
    case ADD_COMMENT:
      let newComment = {
        id: 4,
        body: state.messageBody,
      };

      state.comments.push(newComment);
      // let messageBody = state.newCommentBody;
      state.newCommentBody = "";
      return state;
    case UPDATE_COMMENT:
      state.newCommentBody = action.body;
      return state;
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostCreator = (headline, body) => ({
  type: UPDATE_POST,
  newTtext: headline,
  newPText: body,
});
export const addCommentCreator = () => ({ type: ADD_COMMENT });
export const updateCommentCreator = (body) => ({
  type: UPDATE_COMMENT,
  body: body,
});

export default blogReducer;
