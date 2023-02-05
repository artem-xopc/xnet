import axios from "axios"


export const PostService = async (limit, page) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response;
};

