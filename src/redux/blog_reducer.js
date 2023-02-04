const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";

const initialState = {
  posts: [
    {
      id: 4,
      tittle: `Первый пост недонесталкера`,
      post: `Здравствуй, user_name, данный пост является первым, но не единственным постом на данном ресурсе. Тестирую велосипедный state.`,
    },
    {
      id: 3,
      tittle: `Второй пост недонесталкера`,
      post: `Снова здравствуй, user_name, продолжаю тестировать велосипедный state.`,
    },
    {
      id: 2,
      tittle: `Третий пост недонесталкера`,
      post: `Здравствуй, user_name, как известно, Бог любит троицу, поэтому данный пост является третим захардкоженным в велосипедном state постом.`,
    },
    {
      id: 1,
      post: `Что ж, может быть, отказаться от заголовков - это хорошая идея, посмотрим как будет дальше (28.01.2023).`,
    },
  ],
  newCommentBody: "",
  newTittleText: "Are you netstalker?",
  newPostText: "[netstalker]",
};

const blogReducer = (state = initialState, action) => {
  let stateCopy = { ...state, posts: [...state.posts] };
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        tittle: stateCopy.newTittleText,
        post: stateCopy.newPostText,
        likes: 0,
      };
      stateCopy.posts.push(newPost);
      stateCopy.newTittleText = "";
      stateCopy.newPostText = "";
      return stateCopy;
    case UPDATE_POST: 
      stateCopy.newTittleText = action.newTtext;
      stateCopy.newPostText = action.newPText;
      return stateCopy;
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
export const updatePostCreator = (textTittle, text) => ({
  type: UPDATE_POST,
  newTtext: textTittle,
  newPText: text,
});
export const addCommentCreator = () => ({ type: ADD_COMMENT });
export const updateCommentCreator = (body) => ({
  type: UPDATE_COMMENT,
  body: body,
});

export default blogReducer;
