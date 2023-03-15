import {
  Button,
  Col,
  Container,
  Row
} from "react-bootstrap";
import s from "../../styles/styles.css";
import { PortfolioCard_1 } from "../UI/Cards/Portfolio1";
import { PortfolioCard_2 } from "../UI/Cards/Portfolio2";
import { PortfolioCard_3 } from "../UI/Cards/Portfolio3";

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


// {``}
// <img
//   src={portArt1}
//   width="1000px"
//   style={{}}
//   alt="Изображение сайта, повествующего о моей книге"
// />
// <Row>
// <Col></Col>
// <Col>
//   <Button variant="outline-info" style={{ margin: "5px" }}>
//     <a
//       className={s.none_dec}
//       href="https://artem-xopc.github.io/about-my-book/"
//       target="_blank"
//       rel="noreferrer"
//     >
//       Посетить сайт
//     </a>
//   </Button>
//   <Button variant="outline-info">
//     <a
//       className={s.none_dec}
//       href="https://github.com/artem-xopc/about-my-book"
//       target="_blank"
//       rel="noreferrer"
//     >
//       Посмотреть код
//     </a>
//   </Button>
// </Col>
// </Row>