import React, { useState, useEffect } from "react";
import "./style/about.css";
import Axios from "axios";

function About() {
  const [about, setAbout] = useState("");
  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/tr-fe-json/main/about_pt.json"
    ).then((res) => {
      setAbout(res.data[0]);
      console.log(res.data);
    });
  }, []);
  return (
    <div id="about">
      <h1>ABOUT</h1>
      <h5>
        {about.judul_about}
        <hr className="line-section" />
        <hr className="line-section" />
        <p>{about.desk_about}</p>
      </h5>
    </div>
  );
}
export default About;
