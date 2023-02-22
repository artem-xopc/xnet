import { Form, Row } from "react-bootstrap";
import s from "./Select.module.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <Row sm={3}>
      <Form.Select aria-label="Выбор количества пользователей"
      value={value}
      onChange={e => onChange(e.target.value)}
      >
        <option disabled value="">{defaultValue}</option>
        {options.map(option => 
          <option key={option.value} value={option.value}>{option.name}</option>)}
      </Form.Select>
    </Row>
    // <select
    // className={s.wrapper}
    // value={value}
    // onChange={e => onChange(e.target.value)} >
    //     <option disabled value="">{defaultValue}</option>
    //     {options.map(option =>
    //         <option key={option.value} value={option.value}>
    //             {option.name}
    //         </option>
    //     )}
    // </select>
  );
};

export default Select;
