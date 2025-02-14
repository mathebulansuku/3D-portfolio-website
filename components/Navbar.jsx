import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../src/styles";
import { NavLinks } from "../src/constants";
import { logo, menu, close } from "../src/assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddindX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-ful flex justify-between items-center max-w-7xl mx-auto"></div>
    </nav>
  );
};

export default Navbar;
