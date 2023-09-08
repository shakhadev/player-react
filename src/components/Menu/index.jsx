import React from "react";
import { Data } from "../../mock";
import { useState } from "react";

const index = () => {
  const [state, usestate] = useState(true);
  return (
    <div className="bg-red-300 w-[400px] h-[100vh]">
      <ul className="text-center">
        {Data.map((item) => (
          <li>{item.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default index;
