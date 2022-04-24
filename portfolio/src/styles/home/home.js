import styled from "styled-components";

export const WelcomeDiv= styled.div`
display: flex;
align-items: center;
border: 1px solid black;
background-color: rgba(24, 22, 22, 0.603);
backdrop-filter: blur(20px);
box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
font-size: 1.5em;
width: 21em;
height: 15em;
`

export const HomeDiv= styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 2em;
margin-top: 3em;

`

export const Button= styled.button`
border: 1px solid black;
background-color: rgba(24, 22, 22, 0.603);
backdrop-filter: blur(20px);
box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 3px 8px -2px rgba(0,0,0,0.75);
color: white;
font-family: 'roboto',sans-serif;
padding: 1em;
width: 5em;
border-radius: 5px;

&&:hover{
    background-color: rgba(10, 10, 10, 0.829);
    border: 1px solid white;
    text-decoration: underline;
}
`