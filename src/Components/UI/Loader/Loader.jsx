import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container style={{ alignItems: 'center' }}>
      <Row style={{marginTop: "150px"}}>
        <Col></Col>
        <Col md="auto">
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="info" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Loader;
