const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";

const aboutReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        tittle: state.newTittleText,
        post: state.newPostText,
        likes: 0,
      };

      state.posts.push(newPost);
      state.newTittleText = "";
      state.newPostText = "";
      return state;
    case UPDATE_POST:
      state.newPostText = action.newText;
      // state.newTittleText = newText;
      return state;
    case ADD_COMMENT:
      let newComment = {
        id: 4,
        body: messageBody,
      };
      
      state.comments.push(newComment);
      let messageBody = state.newCommentBody;
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
export const updatePostCreator = (text) => ({
  type: UPDATE_POST,
  newText: text,
});
export const addCommentCreator = () => ({ type: ADD_COMMENT });
export const updateCommentCreator = (body) => ({
  type: UPDATE_COMMENT,
  body: body,
});

export default aboutReducer;
