import React, { useState } from "react";
import gg1 from "../Images/gg1.jpeg";
import gg2 from "../Images//gg2.jpeg";
import gg3 from "../Images/gg3.png";
import gg4 from "../Images/gg4.jpeg";
import gg5 from "../Images/gg5.jpeg";
import { RiArrowDropRightFill, RiArrowDropLeftFill } from "react-icons/ri";
import { GiFlame } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Deals = () => {
  const slides = [gg1, gg2, gg4, gg5, gg3];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  return (
    <div className="mx-20 my-5" id="deals">
      <div className="border-dashed border-t border-slate-400 flex items-center flex-wrap py-5 ">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">Hot Deals</h1>
        <GiFlame className="text-orange-500" size={24} />
        <div className="basis-full w-full justify-center flex lg:mr-72 ml-16 mt-5">
          {slides.map((image, index) => (
            <Link to={"/"} key={index}>
              <motion.img
                src={image}
                alt={image}
                className="rounded-[12px] shadow-md"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: "30%", height: "40%", position: "absolute" }}
              />
            </Link>
          ))}

          <div className="flex flex-row gap-3 relative lg:ml-44 md:ml-20 mr-10">
            <RiArrowDropLeftFill
              onClick={handleBack}
              size={80}
              className=" mt-[400px] cursor-pointer hover:text-red-600 transition ease-out hover:scale-125  "
            />
            <RiArrowDropRightFill
              onClick={handleNext}
              size={80}
              className="mt-[400px] cursor-pointer hover:text-red-600 transition ease-out hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
