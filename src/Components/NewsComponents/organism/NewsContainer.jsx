import { connect } from "react-redux";
import NewsPosts from "../molecules/NewsPosts";

let mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPosts);

export default NewsContainer;
