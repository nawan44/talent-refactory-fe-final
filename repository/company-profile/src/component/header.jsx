import React from "react";
import { Row, Container } from "reactstrap";
import "./style/header.css";
import logo from "../assets/logo/logo.png";
import Navbarmenu from "./navbar";

const arrow = {
  textAlign: "center",
  margin: "0 auto",
  marginTop: 50,
};
function Header() {
  return (
    <div>
      <Navbarmenu />
      <div className="header">
        <Container>
          <Row>
            <img src={logo} className="logo-header" />
          </Row>
          <h1 className="brand-name">Rachwan</h1>
          <Row>
            <hr className="line-header" />
            <hr className="line-header" />
          </Row>
          <h1 className="tag-line">Reach Your Global</h1>
          <Row>
            <div style={arrow}>
              <a href="#" className="btn-arrow">
                <i class="far fa-arrow-alt-circle-down"></i>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Header;
