import React from "react";
import { addPostCreator, updatePostCreator } from "../../../redux/about_reducer";
import MyPosts from "../Molecules/MyPosts";

const BlogContainer = (props) => {
    debugger
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (textTittle, text) => {
    let action = updatePostCreator(textTittle, text)
    props.store.dispatch(updatePostCreator(action));
  };

  return (
    <div>
      <MyPosts addPost={addPost} 
                    updateNewPostText={onPostChange} 
                    posts={state.about.posts} 
                    newTittleText={state.about.newTittleText}
                    newPostText={state.about.newPostText} />
    </div>
  );
};

export default BlogContainer;
