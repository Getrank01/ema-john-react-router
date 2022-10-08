import React from 'react';
import log0 from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={log0} alt="" />
            <div>
                <a href="">Home</a><a href="">About</a><a href="">Interface</a><a href="">Link</a>
            </div>
        </nav>
    );
};

export default Header;