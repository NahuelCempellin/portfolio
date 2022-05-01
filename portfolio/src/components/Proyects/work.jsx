import React from "react";
import Carousel from "./carousel";
import { SliderData } from "./imageData";


export default function Proyects(){
    return(
    <div>
        <Carousel slides={SliderData}/>
    </div>
    )
}