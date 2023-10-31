import React from "react";
import joinImage from "../Images/joinNow.jpeg";
const JoinNow = () => {
  return (
    <div className="mt-0" id="JoinNow">
      <div
        className="text-white bg-cover h-[34rem] bg-no-repeat bg-center p-5 w-full justify-center items-center flex "
        style={{ backgroundImage: `url(${joinImage})` }}
      >
        <div className="flex flex-col items-center p-10 text-center">
          <h1 className="text-6xl">Welcome to the World of Esports!!</h1>
          <p className="text-2xl p-5">Excited to join? So are we</p>
          <button className="bg-black rounded-full px-4 py-3 text-center uppercase font-bold cursor-pointer hover:text-red-600 transition hover:scale-110 ease-out">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
