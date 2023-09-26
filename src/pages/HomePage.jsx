import React from "react";
import NavBar from "../components/Home/NavBar";
import Banner from "../components/imgs/banner.jpg";
import "../styles/HomePage.css";
import About from "../components/Home/About";
import ProductsCategories from "../components/Home/ProductsCategories";
import Delivery from "../components/Home/Delivery";
import Footer from "../components/Home/Footer";

export default function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <div id="banner">
        <img src={Banner} alt="Banner" />
      </div>
      <ProductsCategories />
      <About />
      <Delivery />
      <Footer />
    </div>
  );
}
