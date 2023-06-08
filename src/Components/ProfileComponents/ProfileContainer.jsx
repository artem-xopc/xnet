import React from 'react';
import ProfileItem from './ProfileItem';
import { setUserProfile } from '../../redux/profile_reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    debugger;
    return <ProfileItem user={this.props.user} />;
  }
}

let mapStateToProps = () => {};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
