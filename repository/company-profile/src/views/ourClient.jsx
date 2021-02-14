import React, { useState, useEffect } from "react";
import "./style/our-client.css";
import Axios from "axios";

const containerServices = {
  width: "100%",
};
function OurClient() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/Json-Example-Company-Data/main/media_pt.json"
    ).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div id="our-client">
      <h1>OUR CLIENT</h1>
      <hr className="line-section"></hr>
      <hr className="line-section"></hr>

      <h5>Here are some our clients that we've worked on :</h5>

      <div style={containerServices}>
        {data.map((item) => (
          <img src={item.media} className="logo-media" />
        ))}
      </div>
    </div>
  );
}
export default OurClient;
