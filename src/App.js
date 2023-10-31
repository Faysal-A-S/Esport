import React from "react";
import Navbar from "./components/Navbar";
import JoinNow from "./components/JoinNow";
import Tournaments from "./components/Tournaments";
import FeaturedGames from "./components/FeaturedGames";
import { BrowserRouter as Router } from "react-router-dom";
import News from "./components/News";
import Deals from "./components/Deals";
import Popular from "./components/Popular";
import Faq from "./components/Faq";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <JoinNow />
        <Tournaments />
        <FeaturedGames />

        <News />
        <Deals />
        <Popular />
        <Faq />
        <Sponsor />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
