import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/public/logo.svg";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <>
      <nav className="bg-neutral-700 border-b border-neutral-500">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <ModeToggle />
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <NavLink to="/" className="flex items-center">
                    <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Workflow"
                    />
                </NavLink>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
