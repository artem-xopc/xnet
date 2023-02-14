import axios from "axios";

class Posts extends React.Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            this.props.setUsers(response.data);
          });
    }

    render ()
}

export default Posts;