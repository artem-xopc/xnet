import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div style={{alignItems: "center"}}>
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loader;
