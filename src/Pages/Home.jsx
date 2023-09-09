import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Data } from "../mock";
import Audio from "../components/Audioplayer";
import { useCategoryContext } from "../Context";
const Home = () => {
  const { selectedCategory, setSelectedCategory } = useCategoryContext();
  useEffect(() => {
    setSelectedCategory(selectedCategory?.category_id - 1);
  }, []);
  console.log(Data[0]);

  // console.log(selectedCategory);
  return (
    <div className="w-full flex flex-col relative items-center">
      <Navbar />
      <div className="w-[80%] flex flex-wrap justify-center ">
        {selectedCategory?.musics?.map((item, index) => {
          return <Audio key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
