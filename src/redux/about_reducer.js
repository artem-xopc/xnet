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
      let messageBody = state.about.newCommentBody;
      state.newCommentBody = "";
      state.comments.push({ id: 4, body: messageBody });
      return state;
    case UPDATE_COMMENT:
      state.newCommentBody = action.body;
      return state;
    default:
      return state;
  }
};

export default aboutReducer;
