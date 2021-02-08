import React from "react";
import "./style/footer.css";
import { Row } from "reactstrap";
const medsos = {
  color: "#ffffff",
  fontSize: "40px",
  float: "left",
  padding: "24px",
  textAlign: "center",
  margin: "0 auto",
};
function Footer() {
  return (
    <div className="app-footer">
      <div className="address-detail">
        <div className="contact-details">
          <div className="title-contact">
            <i class="fas fa-phone"></i>
            <h4>Call</h4>
          </div>
          <p>
            <a href="http://wa.me/+62811xxxx" className="footer-text">
              0811xxxxxx
            </a>
          </p>
        </div>
        <div className="contact-details">
          <div className="title-contact">
            <i class="fas fa-map-marker-alt"></i>
            <h4>Visit</h4>
          </div>
          <p>
            <a href="https://goo.gl/maps" className="footer-text">
              Jalan Damai No 1
            </a>
          </p>
        </div>
        <div className="contact-details">
          <div className="title-contact">
            <i class="far fa-envelope-open"></i>
            <h4>Email</h4>
          </div>
          <p>
            <a href="mailto:info@rachwan.com" className="footer-text">
              info@rachwan.com
            </a>
          </p>
        </div>
      </div>
      <Row className="social">
        <div className="social-media-center">
          <div className="container-medsos">
            <a href="https://www.facebook.com">
              <i class="fab fa-facebook" style={medsos}></i>
            </a>
            <a href="https://instagram.com">
              <i class="fab fa-instagram" style={medsos}></i>
            </a>
            <a href="https://linkedin.com">
              <i class="fab fa-linkedin" style={medsos}></i>
            </a>
          </div>
        </div>
      </Row>
      <div className="col-copy">
        <p className="copyright">&copy; Rachwan all right reserverd.</p>
      </div>
    </div>
  );
}
export default Footer;
