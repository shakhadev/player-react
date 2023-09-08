import React from "react";
import Navbar from "../components/Navbar";
import { Data } from "../mock";
import Audio from "../components/Audioplayer";
const Home = () => {
  return (
    <div className="w-full flex flex-col  items-center">
      <Navbar />
      <div className="w-[80%] flex flex-wrap justify-center ">
        {Data[0].musics.map((item) => {
          return <Audio {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
