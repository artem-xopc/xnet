import axios from 'axios';

export default class Users_SNJS_Service {
  static async getAllUsers(limit = 10, page = 1) {
    const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users', {
      params: {
        _count: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getUserById(userId) {
    const response = await axios.get(
      'https://social-network.samuraijs.com/api/1.0/users/' + userId,
    );
    return response;
  }
}
