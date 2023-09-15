import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCart4, BsGeoAlt, BsHeart, BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Container fluid>
      <Row className="row-one">
        <Col className="column-one">
          <span>Super Value Deals - Save more with coupons</span>

              
          <Dropdown className="dropdwon-btn">  
            <Dropdown.Toggle
              variant="none"
              id="dropdown-basic"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Deutsch</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="row-two">
        <Col className="column-two">
          <h2>
            <BsCart4 />
            FreshCart
          </h2>
          <div className="form-location">
            <Form className="form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <div className="cisearch">
                <CiSearch />
              </div>
              <Button variant="outline-success" className="locate">
                <BsGeoAlt className="geo" /> Location
              </Button>
            </Form>
          </div>

          {/* list of icons */}
          <div className="icons">
            <BsHeart />
            <span>5</span>
            <BsPerson />
            <FiShoppingBag />
            <span>1</span>
          </div>
          {/* end of list of icons */}
        </Col>
      </Row>

      
      
    </Container>
  );
}

export default Header;
