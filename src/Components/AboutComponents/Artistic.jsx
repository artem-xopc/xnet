import { Container, Row, Col } from "react-bootstrap";
import { PortfolioCard_1 } from "../UI/Cards/Portfolio1";
import { PortfolioCard_2 } from "../UI/Cards/Portfolio2";
import { PortfolioCard_3 } from "../UI/Cards/Portfolio3";
// import s from "../../styles/styles.css";

const Artistic = () => {
  return (
    <Container style={{ marginBottom: "10px" }}>
      <Row>
        <Col><PortfolioCard_1 /></Col>
        <Col><PortfolioCard_2 /></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><PortfolioCard_3 /></Col>
      </Row>
    </Container>
  );
};

export default Artistic;