import React from "react";
import {AiFillProfile} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { SvgDiv } from "../../../styles/Navbar/nav3";

export default function Contact(){
    return(
        <SvgDiv>
            <Link to='/about'>
            <AiFillProfile/>
            </Link>
        </SvgDiv>
    )
}