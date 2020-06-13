import React from "react";

import './headName.css';

const HeadName = ({descr}) => {
    const {description, classes} = descr;
    return (
        <h1 className={classes}>{description}</h1>
    );
}

export default HeadName;