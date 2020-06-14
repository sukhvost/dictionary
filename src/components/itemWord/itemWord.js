import React from "react";
import DescriptionPlace from "../descriptionPlace";

import './itemWord.css';

const descriptionPlaceData = [{name: 'cat'}, {name: 'кот'}];

const classesDescription = {classItem: 'description_item', classBlock: 'main-description-wrap'}

const ItemWord = () => {
    return (
        <div>
            <DescriptionPlace names={descriptionPlaceData} classes={classesDescription}/>
            <div>dfg</div>
        </div>
    );
}

export default ItemWord;