import React from "react";
import { Link } from "react-router-dom";
import logoX from "../Images/logo.png";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiLoginCircleFill,
  RiLoginBoxLine,
  RiMailFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-black px-5 py-1 w-full grid grid-cols-3 text-white justify-self-center">
      <div className="flex items-center col-span-1">
        <img
          src={logoX}
          alt=""
          className="h-[40px] w-[40px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]"
        />
        <h1 className=" font-extrabold text-sm md:text-2xl lg:text-5xl">
          Gaming
        </h1>
      </div>
      <div className="col-span-2">
        <div className=" grid grid-cols-2 justify-self-center py-5">
          <div className="flex flex-col ">
            <h1 className="font-semibold text-lg mb-5 ml-2">Socials</h1>

            <Link
              to="https://www.facebook.com"
              className="mb-1 flex items-center "
            >
              <RiFacebookCircleFill /> &nbsp; Facebook
            </Link>
            <Link
              to="https://twitter.com/?lang=en"
              className="mb-1 flex items-center"
            >
              <RiTwitterFill /> &nbsp; Twitter
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="mb-1 flex items-center"
            >
              <RiInstagramFill />
              &nbsp; Instagram
            </Link>
            <Link
              to="https://bd.linkedin.com/"
              className="mb-1 flex items-center "
            >
              <RiLinkedinBoxFill />
              &nbsp; LinkedIn
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg mb-5 ml-2">Join Us</h1>
            <div className="items-start flex flex-col">
              <button className="flex items-center mb-1">
                <RiLoginCircleFill />
                &nbsp; Login
              </button>
              <button className="flex items-center mb-2">
                <RiLoginBoxLine />
                &nbsp; Register
              </button>

              <a
                href="mailto:faysala1655@gmail.com"
                className="flex items-center"
              >
                <RiMailFill />
                &nbsp; Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
