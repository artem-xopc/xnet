import axios from "axios";

export default class Users_SNJS_Service {
    static async getAllUsers() {
          this.props.setFetchingStatus(true);
          axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`,
            )
            .then((response) => {
              this.props.setFetchingStatus(false);
              this.props.setUsers(response.data.items);
              this.props.setTotalCount(response.data.totalCount);
            });
        }

    static async getUserById(userId) {
        const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users/' + userId);
        return response;
    }
}