import { Form } from "react-bootstrap";

const Color = () => {
  return (
    <div>
      <Form.Label htmlFor="exampleColorInput">Choose your color!</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />
    </div>
  );
};

export default Color;
