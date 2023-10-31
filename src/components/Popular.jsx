import React from "react";

const Popular = () => {
  return (
    <div className="mx-20 my-5" id="popular">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-between flex-wrap py-5">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">
          Popular Stream
        </h1>
        <div className="basis-full flex justify-center ">
          <iframe
            src="https://player.twitch.tv/?channel=esl_dota2&parent=localhost"
            height="100%"
            width="100%"
            allowFullScreen
            title="stream"
            className="h-60 md:h-96 lg:h-[48rem]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Popular;
