import axios from "axios";

export default class UsersService {
    static async getAllUsers(count = 10, page = 1) {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users`, {
            params: {
                _count: count,
                _page: page,
            }
        })
        return response;
    }

    static async getUserById(id) {
        const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users/' + id);
        return response;
    }
}