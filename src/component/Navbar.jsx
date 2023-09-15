import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import menubanner from "../assets/pictures/menu-banner.jpg";

function AppNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container className="navbar-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}

              {/*All Departments */}
              <div className="all-department">
              <NavDropdown title="All Departments" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Dairy, Bread & Eggs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Snacks & Munchies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fruits & Vegetables</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Cold Drinks & Juices</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Breakfast & Instant Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Bakery & Biscuits</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">CHicken, Meat & Fish</NavDropdown.Item>
              </NavDropdown>
              </div>

             
              {/* Home */}
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Home 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Home 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Home 4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Home 5</NavDropdown.Item>
              </NavDropdown>

              {/* shop */}
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Shop Grid - Filter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Shop Grid - 3 Column
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Shop List - Filter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Shop Filter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Wide
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Single
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Single v2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Wishlist
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Cart
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Shop Checkout
                </NavDropdown.Item>
              </NavDropdown>

              {/* Store */}
              <NavDropdown title="Stores" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Shop List
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Shop Grid
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Shop Single
                </NavDropdown.Item>
              </NavDropdown>

              {/* Mega menu */}
              <NavDropdown
                title="Mega menu"
                id="basic-nav-dropdown"
                className="mega-menu"
              >
                <div className=" beverages ">
                  <Row md={4} className="row-el">


                    {/* Dairy, Bread & Eggs */}
                    <Col className="col-1">
                      <Nav.Link href="#link">Dairy, Bread & Eggs</Nav.Link>

                      <NavDropdown.Item href="#action/3.1">
                        Butter
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Milk Drinks
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Curd & Yogurt
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Eggs
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Bun & Bakery
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Cheese
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Condensed Milk
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Dairy Products
                      </NavDropdown.Item>
                    </Col>

                    {/* Breakfast & Instant Food */}
                    <Col xs={6} className="col-2">
                      <Nav.Link href="#link">Breakfast & Instant Food</Nav.Link>
                      <NavDropdown.Item href="#action/3.1">
                        Breakfast Cereal
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Noodles, Pasta & Soup
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Frozen Veg Snacks
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Vermicelli
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Instant Mixes
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Batter
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Fruit and Juices
                      </NavDropdown.Item>
                    </Col>

                    {/* Cold Drinks & Juices */}
                    <Col className="col-3">
                      <Nav.Link href="#link">Cold Drinks & Juices</Nav.Link>
                      <NavDropdown.Item href="#action/3.1">
                        Soft Drinks
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Fruit Juices
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Coldpress
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Water & Ice Cubes
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Soda & Mixers                        
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Health Drinks
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Herbal Drinks
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Milk Drinks
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                  
                  <Row className="imag-row">
                    <Col xs={6} md={4}>
                      <Image src={menubanner} rounded />
                    </Col>
                  </Row>
                </div>
                
                
              </NavDropdown>

              {/* Pages */}
              <NavDropdown title="Pages" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog Single</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blog Category</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">404 Error</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Contact</NavDropdown.Item>
              </NavDropdown>

              {/* Account */}
              <NavDropdown title="Account" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Forget Password</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">My Account</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">Dashboard</Nav.Link>
              <Nav.Link href="#link">Docs</Nav.Link>
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
