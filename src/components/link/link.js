import React from "react";

import './link.css';

const Link = ({links,style}) => {

    const {block} = style;

    const itemLink = links.map(item => {
        const {id, target, url, name, classItem} = item;

        return (
            <a className={classItem} href={url} target={target} key={id}>{name}</a>
        );
    })

    return (
        <div className={block}>
            {itemLink}
        </div>
    );
}

export default Link;