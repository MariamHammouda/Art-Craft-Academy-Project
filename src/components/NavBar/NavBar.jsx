// arrow functional componenets
// why { NavBarMenu }  with curlu braces , what does that mean ?
import React from "react";
import { NavBarMenu } from "../../mockData/data";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../../Art-Craft-Academy/src/Components/Logo/Logo";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          {/* logo part -------- */}

          <Logo />

          {/* navbar links part -------- */}
          {/*  login & registeration buttons part -------- */}
          {/* Sidebar part "Hamburger Menu"-------- */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
