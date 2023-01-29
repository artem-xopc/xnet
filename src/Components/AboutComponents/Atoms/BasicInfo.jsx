import { Container, Row, Col } from "react-bootstrap";
import ava from "../../../icons/ava.jpg";

const BasicInfo = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={ava} width="150" br="50%" />
            <h4>
              <strong>Основная информация</strong>
            </h4>
            <p>{props.text}</p>
          <div>
            <h4>
              <strong>Технические навыки</strong>
            </h4>
            <p>{props.tech}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BasicInfo;