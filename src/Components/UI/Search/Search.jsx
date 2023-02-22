import { Form, InputGroup, Row } from "react-bootstrap";

function Search() {
  return (
    <Row className="mb-3">
      <InputGroup size="sm" className="mt-3" bg="000">
        <InputGroup.Text id="inputGroup-sizing-sm">Поиск</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </Row>
  );
}

export default Search;
