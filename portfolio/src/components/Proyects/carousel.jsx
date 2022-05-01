import {react, useState} from 'react';
import { SliderData } from './imageData';
import {BiArrowToLeft, BiArrowToRight} from 'react-icons/bi';
import { Slider, SlidImage, TitleDiv} from '../../styles/proyects/carousel';

export default function Carousel({slides}){
    const[current, setCurrent]= useState(0);
    const length= slides.length;

    const nextSlide= () =>{
        setCurrent(current === length -1 ? 0: current+1)
    }
    
    const prevSlide= ()=>{
        setCurrent(current === 0? length -1: current -1)
    }
    

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }



    return(
        <div>
             <h1>PROYECTS</h1>
             
        <Slider >
            <BiArrowToRight className='right-arrow' onClick={nextSlide}/>
            <BiArrowToLeft className='left-arrow' onClick={prevSlide}/>
            {
                SliderData.map((el , index)=>{
                    return(
                        
                        <div className={index === current ? 'slide active' : 'slide'} key={index}> 
                        {index === current && (
                             <div>
                                 <TitleDiv>
                                <h2>PI:</h2>
                                 <hr/>
                                 <h2>{el.name}</h2>
                                 </TitleDiv>
                             <SlidImage src={el.image} alt={el.name}/>
                             </div>
                             )}        
                            
                        </div>
                        

                    )
                })
            }
        </Slider>
        </div>
    )
}