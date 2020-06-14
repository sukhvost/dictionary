import React from "react";
import DescriptionPlace from "../descriptionPlace";

import './itemWord.css';

const descriptionPlaceData = [{name: 'cat'}, {name: 'кот'}];

const classesDescription = {classItem: 'word_item', classBlock: 'word-wrap'}

const ItemWord = () => {
    return (
        <div className={'main-word-wrap'}>
            <DescriptionPlace names={descriptionPlaceData} classes={classesDescription}/>
            <div className={'btn-wrap'}>dfg</div>
        </div>
    );
}

export default ItemWord;