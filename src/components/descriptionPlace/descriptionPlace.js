import React from "react";

import './descriptionPlace.css';

const DescriptionPlace = ({names, classes}) => {

    const {classBlock, classItem} = classes;

    const descriptionBlocks = names.map(item => {

        const {name} = item;

        return (
            <span className={classItem}>{name}</span>
        )
    })

    return (
        <div className={classBlock}>
            {descriptionBlocks}
        </div>
    );
}

export default DescriptionPlace;