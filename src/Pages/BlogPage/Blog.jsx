const Blog = () => {
    
  let postElement = props.state.posts.map((p) => (
    <BlogPost id={p.id} tittle={p.tittle} post={p.post} comments={p.body} />
  ));
  return (
    {postElement}
  )
}