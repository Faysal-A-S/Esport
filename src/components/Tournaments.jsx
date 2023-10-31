import React from "react";
import acer from "../Images/acer.webp";

const Tournaments = () => {
  const tournaments = [
    {
      name: "Predator League India",
      game: "Dota 2",
      type: "Regional",
      elim: "Single Elimination",
      date: "11/11/2023 15:00",
      joined: "10",
      image: acer,
      reg: "2",
    },
    {
      name: "Predator League India",
      game: "Dota 2",
      type: "Regional",
      elim: "Single Elimination",
      date: "11/11/2023 15:00",
      joined: "101",
      image: acer,
      reg: "2",
    },
    {
      name: "Predator League India",
      game: "Dota 2",
      type: "Regional",
      elim: "Single Elimination",
      date: "11/11/2023 15:00",
      joined: "15",
      image: acer,
      reg: "2",
    },
    {
      name: "Predator League India",
      game: "Dota 2",
      type: "Regional",
      elim: "Single Elimination",
      date: "11/11/2023 15:00",
      joined: "20",
      image: acer,
      reg: "2",
    },
  ];
  return (
    <div className="mx-20 my-5" id="tournament">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-between flex-wrap py-5">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">
          Upcoming Tournaments
        </h1>
        <button className="bg-black rounded-full px-4 py-3 text-center uppercase font-bold cursor-pointer text-white hover:text-red-600 ">
          More
        </button>
        <div className="basis-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {tournaments.map((tournament, index) => {
            return (
              <div
                className="bg-white rounded overflow-hidden shadow-md transition hover:scale-105 ease-out hover:shadow-lg relative"
                key={index}
              >
                <img src={tournament.image} alt="" className="object-cover" />
                <div className="flex flex-col p-3 gap-2">
                  <span className="text-lg font-semibold block">
                    {tournament.name}
                  </span>
                  <div className="flex flex-col gap-y-2 border-t-2">
                    <span className="font-bold">{tournament.game}</span>
                    <span>{tournament.type}</span>
                    <span>{tournament.elim}</span>
                    <span className="font-semibold">{tournament.date}</span>
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center ">
                  <span className="font-bold ">{tournament.joined} Joined</span>
                  <button className="rounded-lg px-3 py-2 bg-white border-2 border-[#3B3C36] text-[#3B3C36] hover:bg-[#3B3C36] hover:text-white hover:font-semibold">
                    Join
                  </button>
                </div>
                <div>
                  <span className="text-xs absolute text-white top-0 right-0 py-2 px-3 bg-gray-700 rounded-full mr-2 mt-2">
                    Registration ends in {tournament.reg} days
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
