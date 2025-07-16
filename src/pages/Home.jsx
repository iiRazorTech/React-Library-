import React from "react";
import HighLights from "../components/Highlights";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Landing />
      <HighLights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
