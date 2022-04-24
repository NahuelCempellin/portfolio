import React from "react";
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import { Nav3Div } from "../../../styles/Navbar/nav3";
export default function Nav3(){
    return(
        <Nav3Div>
            <hr/>
            <FaGithub/>
            <FaLinkedin/>
            <GrMail/>
            
        </Nav3Div>
        
    )
}