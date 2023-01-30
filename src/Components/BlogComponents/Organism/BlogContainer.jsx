import React from "react";
import { addPostCreator, updatePostCreator } from "../../../redux/blog_reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "../Molecules/MyPosts";
import BlogPost from "../Atoms/BlogPost"

const BlogContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let postElement = store.getState().blog.posts.map((p) => (
          <BlogPost id={p.id} tittle={p.tittle} post={p.post} comments={p.body} />
        ));
        let addPost = () => {
          store.dispatch(addPostCreator());
        };
        let onPostChange = (textTittle, text) => {
          store.dispatch(updatePostCreator(textTittle, text));
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
            {postElement}
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default BlogContainer;
