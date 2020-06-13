import React from "react";

import './link.css';

const Link = ({links}) => {

    const itemLink = links.map(item => {
        const {id, target, url, name} = item;

        return (
            <a className={'link-item'} href={url} target={target} key={id}>{name}</a>
        );
    })

    return (
        <div className={'header-links'}>
            {itemLink}
        </div>
    );
}

export default Link;