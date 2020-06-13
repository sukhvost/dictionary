import React from "react";

import './logo.css';

const Logo = ({img}) => {

    const url = img.img;
    const path = './imgs/';

    return (
        <div className={'header-logo'}>
            <img src={`${path}${url}`} alt={'logo flag'}/>
        </div>
    );
}

export default Logo;