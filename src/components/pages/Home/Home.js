import React from "react";
import AddSection from "./AddSection";
import Offer from "./Offer";
import Reviews from "./Reviews/Reviews/Reviews";
import Banner from "./Banner";
import Summary from "./Summary";
import Tools from "./Tools/Tools/Tools"


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Summary></Summary>
      <Tools></Tools>
      <Offer></Offer>
      <Reviews></Reviews>
      <AddSection></AddSection>
     
    </>
  );
};

export default Home;
