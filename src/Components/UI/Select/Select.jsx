import { Form, Row } from "react-bootstrap";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <Row>
      <Form.Select
      value={value}
      onChange={e => onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>

        {options.map(option => 
          <option key={option.value} value={option.value}>{option.name}</option>
        )}

      </Form.Select>
    </Row>
  );
};

export default Select;
