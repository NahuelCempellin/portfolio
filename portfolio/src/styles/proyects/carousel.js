import styled from 'styled-components';

export const Slider= styled.section`
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin-top:5px;


.right-arrow{
    position: absolute;
    top:50%;
    right:275px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    color: white;
   
}

    .left-arrow{
        position: absolute;
        top:50%;
        left:275px;
        font-size: 2rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
        color: white;
        
        

}

.slide{
    opacity:0;
    transition-duration: 1s ease;
}

.slide.active{
    opacity:1;
    transition-duration: 1s;
    transform: scale(1.08);
}


`



export const SlidImage= styled.img`

width: 40em;
height: 20em;
border-radius: 10px;
box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);

`

export const TitleDiv= styled.div`
position:absolute;
width:100%;
margin-top: 100px;
black;
hr{
    width:50%;
}

`

