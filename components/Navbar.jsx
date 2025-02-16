import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../src/styles";
import { navLinks } from "../src/constants";
import { logo, menu, close } from "../src/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          gap-2
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); //scrolls to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Manny{" "}
            <span className="sm:block hidden">| Full-Stack Developer</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
