import React from "react";
import Logo from "../../components/logo";
import Link from "../../components/link";

import './header.css';

const Header = () => {
    return (
        <header className={'header-app'}>
            <Logo/>
            <div className={'header-links'}>
                <Link/>
            </div>
        </header>
    );
}

export default Header;