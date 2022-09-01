import React from "react";
import Header from "./Header/Header";
import TravelFacilities from "./listes/TravelFacilities";
import SearchBar from "./SearchBar/SearchBar";
import { SlideData } from "./Slider/SlideData";
import Slideshow from "./Slider/Slideshow";
import { TravelData } from "./Slider/travel-slider/TravelData";
import TravelSlider from "./Slider/travel-slider/TravelSlide";

export default function IndexPage() {
    return (
        <div className="wrapper">
            <Header />
            <Slideshow slides={SlideData} />
            <TravelFacilities />
            {/* <TravelSlider slides={TravelData} />
            <SearchBar/> */}
        </div>
    )
}