import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SvgDiv } from "../../../styles/Navbar/nav3";

export default function Proyects(){
    return(
        <SvgDiv>
            <Link to='/proyects'>
            <FaCode/>
            </Link>
        </SvgDiv>
    )
}