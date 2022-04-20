import React from "react";
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {FaCode} from 'react-icons/fa';
import { Nav3Div } from "../../../styles/Navbar/nav3";
export default function Nav3(){
    return(
        <Nav3Div>
            <FaGithub/>
            <FaLinkedin/>
            <GrMail/>
            <FaCode/>
        </Nav3Div>
        
    )
}