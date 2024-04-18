import React from "react";
import Heading from "../../Components/Home/Heading";
import Cards from "../../Components/Home/Cards";
import Divider from "../../Components/Home/Divider";
import LeftDivider from "../../Components/Home/LeftDivider";
import Specifications from "../../Components/Home/Specification";
import Reviews from "../../Components/Home/Reviews";

const Home = () => {
    return(
        <>
         <Heading/>
         <Cards/>
         <Divider/>
         <LeftDivider/>
         <Specifications/>
         <Reviews/>
        </>
    )
};
export default Home;