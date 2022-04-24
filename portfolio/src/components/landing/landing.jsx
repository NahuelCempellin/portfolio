import React from "react";
import Image from '../background/Pc.png'
import { LandingDiv } from "../../styles/landing/landing";
import { Title } from "../../styles/landing/landing";


export default function Landing(){
    return(
        <LandingDiv>
            <Title>
            <div class="container">
             <div class="glitch" data-text="NAHUEL">NAHUEL CEMPELLIN</div>
                <div class="glow">NAHUEL CEMPELLIN</div>
            <p class="subtitle">FULL-STACK DEVELOPER</p>
            {/* <div class="scanlines"></div> */}
        </div>
            </Title>
            
            
            
            <div>
            <img src={Image} width='100%;'/>
            </div>
        </LandingDiv>
    )
}