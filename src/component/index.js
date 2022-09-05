import React from "react";
import ContainBar from "./levels/ContainBar";
import TravelFacilities from "./listes/TravelFacilities";
import { SlideData } from "./Slider/SlideData";
import Slideshow from "./Slider/Slideshow";
import Destinations from "./Destinations/Destinations";
import Articles from "./Articles/Articles";

export default function IndexPage() {
    return (
        <>
            <div className="wrapper">
               
                <Slideshow slides={SlideData} />
                <div>
                    <TravelFacilities />
                </div>
                <ContainBar />
                <Destinations />
                <Articles />
            </div>
        </>
    )
}