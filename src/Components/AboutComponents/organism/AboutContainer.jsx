import { connect } from "react-redux";
import InfoAbout from "../molecules/infoAbout";


let mapStateToProps = (state) => {
  return {
    info: state.about.info,
    tech_info: state.about.tech_info,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(InfoAbout);

export default AboutContainer;
