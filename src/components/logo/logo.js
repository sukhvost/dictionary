import React from "react";

import './logo.css';

const Logo = ({img}) => {

    const url = img.img;
    const path = './imgs/';

    return (
        <img src={`${path}${url}`} alt={'logo flag'}/>
    );
}

export default Logo;