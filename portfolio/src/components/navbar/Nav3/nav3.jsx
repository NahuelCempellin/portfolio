import React from "react";
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import { Nav3Div } from "../../../styles/Navbar/nav3";
import {Link} from 'react-router-dom';


export default function Nav3(){
    return(
        <Nav3Div>
            <hr/>
            <a href="https://github.com/NahuelCempellin" target='_blank'>
            <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/nahuel-felipe-cempellin"  target='_blank'>
            <FaLinkedin/>
            </a>
            <a href="mailto: nahuelcempellin@gmail.com"  target='_blank'>
            <GrMail/>
            </a>
            
        </Nav3Div>
        
    )
}