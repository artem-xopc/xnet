import React, { useState } from 'react';
import ProfileItem from './ProfileItem';
import { setUserProfile } from '../../redux/profile_reducer';
import { useLocation, useNavigate, useParams } from 'react-router';
import Users_SNJS_Service from '../../API/Users_SNJS_Service';

function ProfileContainer(props) {
  const [profile, setProfile] = useState({});
  const params = useParams();
  debugger;

  const [fetchUserById, isLoading, userError] = useFetching(async (userId) => {
    const response = await Users_SNJS_Service.getUserById(userId);
    setProfile(response.data);
  });

  useEffect(() => {
    fetchUserById(params.userId);
  }, []);

  return <ProfileItem profile={profile} />;
}

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     // let userid = this.props.router.params.userId;
//     // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
//     //   this.props.setUserProfile(response.data);
//     // });
//   }

//   render() {
//     return <ProfileItem {...this.props} />;
//   }
// }

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
