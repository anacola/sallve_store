import React from 'react';
import Logo from './sallve-logo.png';
import './style.css'

const Header = () =>{
    return (

        <header className = {'header'}>
            <div>
                <img src={Logo} className={'logo'}></img>
            </div>

        </header>
    )
};

export default Header;

