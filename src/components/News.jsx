import React from "react";
import valoNews from "../Images/valorant-news.png";
import { Link } from "react-router-dom";
import lolside from "../Images/leagueSideImage.jpg";
import dotaside from "../Images/dotaSideimage.jpg";
import csside from "../Images/cs2SideImage.jpg";
const News = () => {
  const sideLink = [
    {
      title:
        "After investigation in SEA DPC Qualifier: 10 players, including VtFaded, banned from Valve events",
      desc: "Things have taken a big turn following the SEA DPC Open Qualifier, as ten players out of Team Orca and Apex have been banned from Valve events.",
      image: dotaside,
    },
    {
      title: "Riot plans mid-scope updates for both Taliyah and Olaf",
      desc: "League of Legends developers have talked about some possible updates to Taliyah and Olaf which should be released in a couple of months.",
      image: lolside,
    },
    {
      title:
        "Virtus Pro CS:GO players will compete under name ‘Outsiders’ in ESL Pro League",
      desc: "The CS:GO players of Virtus Pro will compete in the ESL Pro League under a different name after ESL prohibits playing under VP name.",
      image: csside,
    },
  ];
  return (
    <div className="mx-20 my-5" id="news">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-between flex-wrap py-5">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">Latest News</h1>
        <div className="basis-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
          <Link className="col-span-1 md:col-span-2 lg:col-span-2 ">
            <img src={valoNews} alt="" />
            <div className="flex flex-col ">
              <span className="text-3xl font-semibold mb-5 ">
                Have the abilities of the newest VALORANT agent been leaked?
              </span>
              <p className="text-lg font-medium ">
                According to popular VALORANT twitter account ValorLeaks, the
                abilities of the newest agent have been leaked.
              </p>
            </div>
          </Link>
          <div className="col-span-1 flex flex-col gap-9  ">
            {sideLink.map((side, index) => {
              return (
                <div className="flex gap-3 " key={index}>
                  <img src={side.image} alt="" className="h-48 w-56 " />
                  <div className="flex flex-col ">
                    <span className="font-bold line-clamp-2">{side.title}</span>
                    <span className="line-clamp-4">{side.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
