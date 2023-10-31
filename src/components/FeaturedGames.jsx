import React from "react";
import { Link } from "react-router-dom";
import dota from "../Images/Dota_2.webp";
import valorant from "../Images/valorant.webp";
import cod from "../Images/cod.jpg";
import lol from "../Images/lol.jpg";
import cs2 from "../Images/cs2.jpg";
import pokemon from "../Images/pokemon.jpg";
const FeaturedGames = () => {
  const games = [
    {
      image: dota,
      name: "Dota 2",
      Link: "https://www.dota2.com/home",
    },
    {
      image: valorant,
      name: "Valorant",
      Link: "https://playvalorant.com/",
    },
    {
      image: cod,
      name: "Call of Duty",
      Link: "https://www.callofduty.com/",
    },
    {
      image: cs2,
      name: "Counter Strike 2",
      Link: "https://www.counter-strike.net/cs2",
    },
    {
      image: lol,
      name: "League of Legend",
      Link: "https://www.leagueoflegends.com/",
    },
    {
      image: pokemon,
      name: "Pokemon",
      Link: "https://www.pokemon.com/us",
    },
  ];
  return (
    <div className="mx-20 my-5" id="featuredGames">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-between flex-wrap py-5">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">
          Featured Games
        </h1>
        <div className="basis-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {games.map((game, index) => {
            return (
              <Link to={game.Link} key={index}>
                <div className="text-center ">
                  <img
                    src={game.image}
                    alt=""
                    className="rounded-md bg-cover bg-no-repeat"
                  />
                  <p className="p-3 font-bold text-lg hover:underline underline-offset-4">
                    {game.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
