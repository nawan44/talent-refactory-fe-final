import React, { useState, useEffect } from "react";
import "./style/media-partner.css";
import Axios from "axios";

const containerServices = {
  width: "100%",
};
function MediaPartner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/Json-Example-Company-Data/main/media_pt.json"
    ).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div id="media-partner">
      <h1>MEDIA PARTNER</h1>
      <hr className="line-section"></hr>
      <hr className="line-section"></hr>

      <h5>Our Core In Integrated Marketing Services :</h5>

      <div style={containerServices}>
        {data.map((item) => (
          <img src={item.media} className="logo-media" />
        ))}
      </div>
    </div>
  );
}
export default MediaPartner;
