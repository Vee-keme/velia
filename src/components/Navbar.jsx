import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCross } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState("");
  const [showHome, setShowHome] = useState();
  const [showAbout, setShowAbout] = useState();
  const [showWork, setShowWork] = useState();
  const [showContact, setShowContact] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);

    console.log(isOpen);
  };

  return (
    <nav className="w-11/12 mx-auto h-16">
      <div className="Navbar w-full flex justify-between items-center">
        <div className="Navbar-title">
          <div className="nav-word">
            V{" "}
            <span className="line">
              {/* {word ? `${word}` : "null"} */}
              elia
            </span>
          </div>
        </div>

        <div className="Navbar-menu" onClick={toggle}>
          {isOpen ? <FaCross className="" /> : <FaBars className="" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
