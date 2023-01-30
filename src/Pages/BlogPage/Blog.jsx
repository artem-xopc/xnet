import BlogContainer from "../../Components/BlogComponents/Organism/BlogContainer";
import BlogPost from "../../Components/BlogComponents/Atoms/BlogPost"; 

const Blog = (props) => {
  let postElement = props.state.posts.map((p) => (
    <BlogPost id={p.id} tittle={p.tittle} post={p.post} comments={p.body} />
  ));
  return (
    <div>
      <BlogContainer store={props.store} />
      {postElement}
    </div>
  );
};

export default Blog;
