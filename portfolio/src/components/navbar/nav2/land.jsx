import React from "react";  
import {BsFillEmojiSmileUpsideDownFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {SvgDiv} from "../../../styles/Navbar/nav3";
import { LanDiv } from "../../../styles/Navbar/nav";
import { Button } from "../../../styles/home/home";

export default function Land(){
    return(
        <LanDiv>
            <Link to='/'>
                
            <Button>Back</Button>
               
            </Link>
            <Link to= '/proyects'>
                <Button>Next</Button>
            </Link>
        </LanDiv>
    )
}