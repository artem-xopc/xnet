import axios from "axios";

export default class UsersService {
    static async getAllUsers(limit = 10, page = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
            params: {
                limit: limit,
                _page: page,
            }
        })
        return response;
    }

    static async getUserById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        return response;
    }
}