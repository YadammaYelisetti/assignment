import React from 'react'
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Header.css'

const Header=()=> {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
