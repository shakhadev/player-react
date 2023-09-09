import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";
const index = () => {
  const [open, setOpen] = useState(false);
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
          <li onClick={() => setOpen(!open)} className="cursor-pointer">
            Menu
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
        </ul>
      </nav>
      {open && <Menu open={setOpen} />}
    </div>
  );
};

export default index;
