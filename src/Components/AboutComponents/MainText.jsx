import { Container, Row, Col } from "react-bootstrap";

const MainText = (props) => {

  let textElement = props.text.map(t => <MainText id={t.id} message={t.message} />)

  return (
    <Container>
      <Row>
        <Col>
            {textElement}
        </Col>
      </Row>
    </Container>
  );
};

export default MainText;
