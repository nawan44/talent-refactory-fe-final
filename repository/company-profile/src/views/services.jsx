import React from "react";
import "./style/services.css";
import services1 from "../assets/services/1.png";
import services2 from "../assets/services/2.png";
import services3 from "../assets/services/3.png";

function Services() {
  return (
    <div id="services">
      <h1>WHAT WE DO</h1>
      <hr className="line-section"></hr>
      <hr className="line-section"></hr>

      <h5>Our Core In Integrated Marketing Services:</h5>
      <div className="container-services">
        <div className="services-left">
          <img src={services1} className="icon-services"></img>
        </div>
        <div className="services-right">
          <h2 className="title-services"> 1. Sevices 1</h2>
          <ul>
            <li className="list-services">Marketing Communication</li>
            <li className="list-services">Evant Services</li>
            <li className="list-services">Digital Solution</li>
          </ul>
        </div>
        <div className="services-left">
          <img src={services2} className="icon-services"></img>
        </div>
        <div className="services-right">
          <h2 className="title-services"> 1. Sevices 2</h2>
          <ul>
            <li className="list-services">Media Activities</li>
            <li className="list-services">Brand Activation</li>
            <li className="list-services">Tntgrated Film Solution</li>
          </ul>
        </div>
        <div className="services-left">
          <img src={services3} className="icon-services"></img>
        </div>
        <div className="services-right">
          <h2 className="title-services"> 1. Sevices 3</h2>
          <ul>
            <li className="list-services">Media Placement</li>
            <li className="list-services">Public Relation</li>
            <li className="list-services">Sales Levarge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Services;
