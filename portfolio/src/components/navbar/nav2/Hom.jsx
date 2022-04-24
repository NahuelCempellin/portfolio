import React from "react";
import {FaHome} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { SvgDiv } from "../../../styles/Navbar/nav3";

export default function Hom(){
    return(
        <SvgDiv>
            <Link to='/home'>
            <FaHome/> 
            </Link>
        </SvgDiv>
    )
}