import React from "react";
import Land from '../navbar/nav2/land'
import Welcome from "./welcome";
import { HomeDiv } from "../../styles/home/home";


export default function Home(){
    return(
        <HomeDiv>
            <h1>Hi! Welcome to my portfolio!</h1>
            <Welcome/>
            <Land/>
        </HomeDiv>
    )
}