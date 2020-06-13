import React from "react";
import Logo from "../../components/logo";
import Link from "../../components/link";
import HeadName from "../../components/headName";

import './header.css';

const Header = () => {
    const headerDataImg = {img: 'flag.png'};

    const headerDataLinks = [
        {name: 'Translate', url: 'https://translate.google.com/', target: '_blank', id: '1', classItem: 'link-item'},
        {name: 'WooordHunt', url: 'https://wooordhunt.ru/', target: '_blank', id: '2', classItem: 'link-item'}
    ];

    const classes = {block:'header-links'};

    const headerNameData = {description: 'Dictionary', classes: 'description'};

    return (
        <header className={'header-app'}>
            <div className={'header-logo'}>
                <Logo img={headerDataImg}/>
            </div>
            <div className={'header-description'}>
                <HeadName descr={headerNameData}/>
            </div>
            <Link links={headerDataLinks} style={classes}/>
        </header>
    );
}

export default Header;