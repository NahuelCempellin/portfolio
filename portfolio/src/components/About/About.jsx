import React from "react";
import { AboutData } from "./aboutData";
import { AboutCountain, ImgName, Present, Skills,
AboutOne } from "../../styles/About/aboutMe";
import react from '../background/react.png';
import redux from '../background/redux.png';
import express from '../background/node.png';
import javascript from '../background/javascript.png';
import nodejs from '../background/nodejs.png';
import pgSQL from '../background/pgSQL.png';

export default function AboutMe({Image}){
    return(
        <div>
            <h1>ABOUT ME</h1>
            {
                AboutData.map(el=>{
                    console.log(el.image)
                    return(
                        <AboutCountain>
                            <AboutOne>
                            <ImgName>
                            <img src={el.image}alt={el.name}/>
                            <h2>{el.name}</h2>
                            </ImgName>
                            <div>
                            <Present>
                            <p>{el.present}</p>
                            </Present>
                            <Present>
                            <p>{el.studies}</p>
                            </Present>
                            </div>
                            </AboutOne>
                            <Skills>
                            <div>
                            <img src={javascript} alt='js' />
                            <p>{el.skills[0]}</p>
                            </div>
                            <div>
                            <img src={react} alt='react' />
                            <p>{el.skills[1]}</p>
                            </div>
                            <div>
                            <img src={redux} alt='redux'/>
                            <p>{el.skills[2]}</p>
                            </div>
                            <div>
                            <img src={nodejs}  alt='nodejs'/>
                            <p>{el.skills[3]}</p>
                            </div>
                            <div>
                            <img src={express} alt='express'/>
                            <p>{el.skills[4]}</p>
                            </div>
                            <div>
                            <img src={pgSQL} alt='pgSQL'/>
                            <p>{el.skills[6]}</p>
                            </div>
                            </Skills>
                        </AboutCountain>
                    )
                })
            }
        </div>
    )
}