import React from 'react';
import ProfileItem from './ProfileItem';
import { setUserProfile } from '../../redux/profile_reducer';
import { useLocation, useNavigate, useParams } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userid = this.props.router.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <ProfileItem user={this.props.user} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
