const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";


const aboutReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 4,
          tittle: state.newTittleText,
          post: state.newPostText,
          likes: 0,
        };
  
        state.posts.push(newPost);
        state.newTittleText = "";
        state.newPostText = "";
      } else if (action.type === UPDATE_POST) {
        state.newPostText = action.newText;
        // state.newTittleText = newText;
      } else if (action.type === ADD_COMMENT) {
        let messageBody = state.about.newCommentBody;
        state.newCommentBody = "";
        state.comments.push({ id: 4, body: messageBody });
      } else if (action.type === UPDATE_COMMENT) {
        state.newCommentBody = action.body;
      }
  
    return state;
}

export default aboutReducer;