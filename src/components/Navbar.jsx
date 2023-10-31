import React, { useState } from "react";
import logoX from "../Images/logo.png";

import { HashLink as Link } from "react-router-hash-link";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-black px-5 py-1 w-full sticky top-0 z-10">
      <div>
        <div className=" grid grid-cols-2 lg:flex lg:justify-between items-center  ">
          <Link to="#JoinNow" smooth>
            <img src={logoX} alt="" className="w-[100px] h-[100px] " />
          </Link>
          <button
            className="text-white lg:hidden block justify-self-end"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenu3Line size={30} />
          </button>
          <nav className={`${isMenuOpen ? "" : "hidden"} col-span-2 lg:block`}>
            <ul className="w-full text-lg text-white lg:flex lg:items-center lg:gap-10  lg:px-6  ">
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#JoinNow" smooth>
                  Home
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#tournament" smooth>
                  Upcoming Tournaments
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#featuredGames" smooth>
                  Featured Games
                </Link>
              </li>

              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#news" smooth>
                  Latest News
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#deals" smooth>
                  Special Deals
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#popular" smooth>
                  Popular Live
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#faq" smooth>
                  FAQs
                </Link>
              </li>
              <li className="py-2 lg:py-0 hover:bg-[#3B3C36] lg:hover:bg-[#3B3C36] lg:hover:px-5 lg:hover:py-3">
                <Link to="#sponsor" smooth>
                  Sponsorships and Partnerships
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
