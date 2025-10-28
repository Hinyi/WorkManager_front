import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <>
      <nav className="bg-neutral-700 border-b border-neutral-500">
        <div className="mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <ModeToggle /> */}
              <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                <img className="h-8 w-auto" src={logo} alt="Workflow" />
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/about"}>About</NavLink>
                  <NavLink to={"/contact"}>Contact</NavLink>     
                  <NavLink to={"/user"}>User</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
