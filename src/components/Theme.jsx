import React, { useState } from 'react'; 
import { css } from 'emotion';
import {jsx} from '@emotion/core';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';



const Card = () => {

    const [background, setBackground] = useState("#fdfdfd");
    const [font, setFont] = useState("#424246");

    const setStyle = (background, font) => {
        setBackground(background);
        setFont(font);
    };

    const card = css`
    max-width: 600px;
    padding: 40px;
    background-color: #fdfdfd;

h1 {
    font-family: "Abril Fatface", cursive;
    font-weight: 400;
    color: {font};
}

p {
    font-family: "Poppins, sans-serif;
    font-weight: 300;
    color: {font};
}
`;
const cardButton = css`
button {
    font-weight: 500;
    font-size: 12px;
    padding: 10px 30px;
    border: none;
    cursor: pointer;

}
`;
const btnColor =css`
color: #fdfdfd;
background-color: #424246;
`;
return (
    <div className={card}>

        <h1>Message</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Repudiandae quo voluptates vel amet blanditiis culpa itaque doloribus, 
            sapiente laborum corporis odit obcaecati cumque consequatur, 
            rerum saepe cupiditate? Sapiente, et consectetur.</p>
        <button 
        onClick = {()=> setStyle ("#424246", "#fdfdfd")}
        onClick = {()=> setStyle ("#fdfdfd", "#424246")}
        className="button"> Change Theme </button>   
    </div>
)


}
export default Card;