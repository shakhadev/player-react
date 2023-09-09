import React from "react";
import { Data } from "../../mock";
import { useCategoryContext } from "../../Context";
const index = (props) => {
  const { handleCategoryClick, setMainData } = useCategoryContext();
  return (
    <div className="bg-black w-[400px] h-[100vh] absolute top-0 left-0 z-10  text-white ">
      <button onClick={() => props.open(false)} className="text-[36px]">
        X
      </button>
      <ul className="text-center flex flex-col justify-center h-[100vh]">
        {Data.map((item, index) => (
          <li
            className="p-4"
            key={index}
            onClick={() =>{
              handleCategoryClick(item)
            }}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
