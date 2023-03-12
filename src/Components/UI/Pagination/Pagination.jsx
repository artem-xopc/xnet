import { Button, Col, Row } from "react-bootstrap";
import { getPagesArray } from "../../../utils/pages";

const Pagination = (totalPages, changePage, currentPage) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div>
      <Row className="mt-3">
        {pagesArray.map((p) => (
          <Col className="m-1">
            {p === currentPage ? (
              <Button variant="outline-info" className="m-1">
                {p}
              </Button>
            ) : (
              <Button
                variant="outline-warning"
                className="m-1"
                onClick={changePage(p)}
              >
                {p}
              </Button>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pagination;
