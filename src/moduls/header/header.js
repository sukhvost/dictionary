import React from "react";
import Logo from "../../components/logo";
import Link from "../../components/link";

import './header.css';

const Header = () => {
    const headerDataImg = {img: 'flag.png'};

    const headerDataLinks = [
        {name: 'Google Transleter', url: 'https://translate.google.com/', target: '_blank', id: '1'},
        {name: 'WooordHunt', url: 'https://wooordhunt.ru/', target: '_blank', id: '2'}
    ]
    return (
        <header className={'header-app'}>
            <Logo img={headerDataImg}/>
            <Link links={headerDataLinks}/>
        </header>
    );
}

export default Header;