import ProfileItem from './ProfileItem';
import { setUserProfile } from '../../redux/profile_reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`,
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    debugger;
    return <ProfileItem {...this.props} />;
  }
}

let mapStateToProps = () => {}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);




// Заметки 

// Убрать повторы в пункте 2.3
// по пунктам 1) SMM, 2) создание блога, 3) усиление бренда, совершенствовать имидж
// подробно описав предложения
// прирост выручки должен быть 2000000
// рентабельность 300000
//   

// Убрать валовую прибыль
// Дописать руб в фин показателя