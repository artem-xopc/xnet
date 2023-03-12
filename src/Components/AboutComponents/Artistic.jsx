import {
  Button,
  Col,
  Row
} from "react-bootstrap";
import portArt1 from "../../styles/images/portfolio/portfolio_art_1.jpg";
import s from "../../styles/styles.css";

const Artistic = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {`1. Сайт с параллакс эффектом, на котором представлено краткое описание моей книги.
          Данный сайт является основой для будущего React приложения, в котором будут представлены все мои книги.`}
      <img
        src={portArt1}
        width="1000px"
        style={{}}
        alt="Изображение сайта, повествующего о моей книге"
      />
      <Row>
      <Col></Col>
      <Col>
        <Button variant="outline-info" style={{ margin: "5px" }}>
          <a
            className={s.none_dec}
            href="https://artem-xopc.github.io/about-my-book/"
            target="_blank"
            rel="noreferrer"
          >
            Посетить сайт
          </a>
        </Button>
        <Button variant="outline-info">
          <a
            className={s.none_dec}
            href="https://github.com/artem-xopc/about-my-book"
            target="_blank"
            rel="noreferrer"
          >
            Посмотреть код
          </a>
        </Button>
      </Col>
      </Row>
    </div>
  );
};

export default Artistic;
