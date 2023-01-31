import { useState } from "react";
import { Container, Row, Col, Button, Collapse, Card } from "react-bootstrap";
import BasicInfo from "../Atoms/BasicInfo";
import MainText from "../Atoms/MainText";

const InfoAbout = (props) => {
  // отслеживание состояния кнопки (используется для раздела "Дополнительно")
  const [open, setOpen] = useState(false);

  // получение элементов страницы из локального state
  let textElement = props.info.map((t) => <MainText id={t.id} text={t.text} />);
  let infoElement = props.tech_info.map((i) => <BasicInfo id={i.id} text={i.text} tech={i.tech} />);

  return (
    <Container>
      <Row>
        <Col>{infoElement}</Col>
        <Col sm={8} style={{ marginBottom: "5px" }}>
          {textElement}
          <Button
            variant="outline-warning"
            onClick={() => setOpen(!open)}
            aria-controls="teleg-collapse-text"
            aria-expanded={open}
          >
            {" "}
            Дополнительно{" "}
          </Button>
          <div style={{ minHeight: "150px" }}>
            <Collapse in={open} dimension="width">
              <div id="teleg-collapse-text">
                <Card body style={{ width: "500px" }}>
                  <p>
                    Я также веду несколько Telegram каналов, на которых стараюсь
                    публиковать только самую интересную и полезную информацию.
                  </p>
                  <p style={{ textAlign: "end" }}>
                    <a href="https://t.me/log_of_proger" target="_blank">
                      {" "}
                      [XProger]{" "}
                    </a>
                    |
                    <a href="https://t.me/proger_literature" target="_blank">
                      {" "}
                      Proger's literature{" "}
                    </a>
                  </p>
                </Card>
              </div>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoAbout;
