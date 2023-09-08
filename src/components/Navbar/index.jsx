import React from "react";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <div className="w-full bg-[#fff] flex justify-center ">
      <nav className="flex  justify-between w-[80%]  h-[90px] items-center ">
        <NavLink to={"/"}>
          <div className="text-3xl font-semibold ">
            Muz<span className="text-[#f46242]">.Uz</span>
          </div>
        </NavLink>
        <ul className="flex w-[200px] justify-between">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>Menu</li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
