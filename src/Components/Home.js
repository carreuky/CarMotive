import React from "react";
import Slide from "./HomeChild/Carousel";
import CardServices from "./HomeChild/CardServices";
import Welcome from "./HomeChild/Welcome";

function Home() {
  return (
    <div>
      <Slide />
      <CardServices />
      <Welcome />
    </div>
  );
}

export default Home;
