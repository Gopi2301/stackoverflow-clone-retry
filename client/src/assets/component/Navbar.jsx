import React from 'react'
import Logo from '/logo.svg'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import '../../styles/components/--Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Navbar = () => {
    const user = false;
    return (
        <>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item'><a className='nav__link'><img src={Logo} className='nav__link-logo' alt="" /></a></li>
                    <li className='nav__item'><a className='nav__link '>
                        <input className='nav__link--search' placeholder='search' type="text" /></a></li>
                    {user ? (<li className='nav__item'><a className='nav__link'><Button className='nav__logout-button' variant="outlined">Logout</Button></a></li>) : (<li className='nav__item'><a className='nav__link'><Button className='nav__login-button' variant="contained">Login</Button></a></li>)}
                </ul>
            </nav>


        </>
    )
}

export default Navbar
