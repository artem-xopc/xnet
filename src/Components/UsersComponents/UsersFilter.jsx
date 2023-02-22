import { Container, Row } from "react-bootstrap";
import Search from "../UI/Search/Search";
import Select from "../UI/Select/Select";

function UserFilter({ filter, setFilter }) {
  return (
    <Container>
      <Row>
        <Select
          value={filter.sort}
          onChange={(selectPost) => setFilter({ ...filter, sort: selectPost })}
          defaultValue="Сортировка пользователей"
          options={[
            { value: "name", name: "Имя пользователя" },
            { value: "username", name: "Псевдоним пользователя" },
          ]}
        />
      </Row>
      <Row>
        <Search
          value={filter.sort}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
      </Row>
    </Container>
  );
}

export default UserFilter;
