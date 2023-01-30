import React from "react";
import { addPostCreator, updatePostCreator } from "../../../redux/blog_reducer";
import MyPosts from "../Molecules/MyPosts";

const BlogContainer = (props) => {
  debugger
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (textTittle, text) => {
    props.store.dispatch(updatePostCreator(textTittle, text));
  };

  return (
    <div>
      <MyPosts
        addPost={addPost}
        updateNewPostText={onPostChange}
        posts={state.blog.posts}
        newTittleText={state.blog.textTittle}
        newPostText={state.blog.newPostText}
      />
    </div>
  );
};

export default BlogContainer;
