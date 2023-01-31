// import React from "react";
import { addPostCreator, updatePostCreator } from "../../../redux/blog_reducer";
import MyPosts from "../Molecules/MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.blog,
    newTittleText: state.blog.newTittleText,
    newPostText: state.blog.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: (textTittle, text) => dispatch(updatePostCreator(textTittle, text)),
  };
};

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default BlogContainer;
