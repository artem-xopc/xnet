import axios from "axios";

export default class UsersService {
    static async getAllUsers(limit = 10, page = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?page`, {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        .then((response) => {
          this.props.setUsers(response.data);
        });
        return response;
    }
}