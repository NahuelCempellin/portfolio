import React from "react";
import Contact from "./contact";
import Proyects from "./proyects";
import Hom from "./Hom";
import { Nav3Div } from "../../../styles/Navbar/nav3";
import Land from "./land";

export default function Nav2(){
    return(
        <Nav3Div>
            {/* <Land/> */}
            <hr/>
            <Hom/>
            <Proyects/>
            <Contact/>
        </Nav3Div>
    )
}