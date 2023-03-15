import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import "./navBar.css";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../context/cart/cartContext";

const NavBar = () => {
 const {cartItems, totalQty}=useContext(CartContext)
 console.log(cartItems);
 const totalQuantity=totalQty()
  return (
    <div>
      {/* <Row>
        <Col lg='12'>
      */}
      <div className="navbar ">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="w-100 d-flex justify-content-between">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Nav.Link
                  href="#home"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Shop
                </Nav.Link>
              </Link>
              <div className="cartcontainer">
                <div className="cartcounter">{totalQuantity}</div>

                <Link to={"/cart"}>
                  <Nav.Link href="#cart">
                    {" "}
                    <BsCartFill style={{ fontSize: "40px", color: "white" }} />
                  </Nav.Link>
                </Link>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
      {/* </Col>
       </Row> */}
    </div>
  );
};

export default NavBar;
