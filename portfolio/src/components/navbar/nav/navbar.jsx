import React from "react";
import Log from "../Log/log";
import Contact from "../nav2/contact";
import Proyects from "../nav2/proyects";
import { NavCont } from "../../../styles/Navbar/nav";
import Nav2 from "../nav2/nav2";
import Nav3 from "../Nav3/nav3";
export default function NavBar(){
    return(
        <NavCont>
            <div>
                <Log/>
            </div>
            <div>
                <Nav3/>
            </div>
            <div>
            <Nav2/>
            </div>
        </NavCont>

    )
}