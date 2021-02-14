import React from "react";
import About from "../views/about";
import Contact from "../views/contact";
import MediaPartner from "../views/mediaPartner";
import OurClient from "../views/ourClient";
import Services from "../views/services";

function Home() {
  return (
    <div>
      <About />
      <Services />
      <MediaPartner />
      <OurClient />
      <Contact />
    </div>
  );
}
export default Home;
