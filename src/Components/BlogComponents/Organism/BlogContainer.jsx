// import React from "react";
import { addPostCreator, updatePostCreator } from "../../../redux/blog_reducer";
import MyPosts from "../Molecules/MyPosts";
import { connect } from "react-redux";


let mapStateToProps = ({blog}) => {
  return {
    posts: blog.posts,
    newHeadline: blog.newHeadline,
    newPostBody: blog.newPostBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: (headline, body) => dispatch(updatePostCreator(headline, body)),
  };
};

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default BlogContainer;
