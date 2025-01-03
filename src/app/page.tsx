import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Pizza from "./components/Pizza";

import Offer from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Menu from "./components/Menuitem";



export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Pizza />
      <Banner />
      <ProductList />
      <Offer />
      <Menu/>
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
