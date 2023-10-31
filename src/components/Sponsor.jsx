import React from "react";
import spo1 from "../Images/sponsor1.webp";
import spo2 from "../Images/sponsor2.jpg";
import spo3 from "../Images/sponsor3.jpg";
import spo4 from "../Images/sponsor4.png";
const Sponsor = () => {
  const sponsors = [spo1, spo2, spo3, spo4];
  return (
    <div className="mx-20 my-5" id="sponsor">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-center flex-wrap py-5">
        <div className="w-full bg-gradient-to-r from-gray-700 to-white h-full flex items-center justify-center flex-col mt-5">
          <h1 className="text-3xl p-5 uppercase font-bold py-7 text-red-700 hover:text-red-600">
            Sponsored to you by:
          </h1>
          <div className="px-5 py-16 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-5">
            {sponsors.map((sponsor, index) => {
              return (
                <img
                  src={sponsor}
                  alt=""
                  className="h-full w-full rounded-3xl shadow-lg"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
