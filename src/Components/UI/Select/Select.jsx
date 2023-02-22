import { Form, Row } from "react-bootstrap";
import s from "./Select.module.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <Row sm={3}>
      <Form.Select aria-label="Default select example">
        <option disabled>Выберите количество выводимых пользователей</option>
        <option value="5">05 пользователей</option>
        <option value="10">10 пользователей</option>
        <option value="15">15 пользователей</option>
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
