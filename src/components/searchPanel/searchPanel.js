import React from "react";

import './searchPanel.css';

const SearchPanel = ({datas}) => {

    const {type, placeholder} = datas;

    return (
        <input type={type} placeholder={placeholder}/>
    );
}

export default SearchPanel;