import React from "react";

import './filterTypeWord.css';

const FilterTypeWord = ({types}) => {

    const typeWord = types.map(item => {
        const {type} = item;
        return (
            <option value={type}>{type}</option>
        );
    });

    return (
        <select>
            {typeWord}
        </select>
    );
}

export default FilterTypeWord;