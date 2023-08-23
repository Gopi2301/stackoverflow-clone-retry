import React, { useState } from 'react'
import Logo from '/logo.svg'
import '../styles/components/--Navbar.scss'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item'><a className='nav__link'><img src={Logo} className='nav__link-logo' alt="" /></a></li>
                    <li className='nav__item'><a className='nav__link '>
                        <input className='nav__link--search' placeholder='search' type="text" /></a></li>
                    {user ? (<li className='nav__item'><a className='nav__link'><Button className='nav__logout-button' variant="outlined">Logout</Button></a></li>) : (<li className='nav__item'><a className='nav__link'><Button className='nav__login-button' variant="contained" onClick={() => navigate('/user/login')}>Login</Button></a></li>)}
                </ul>
            </nav>

        </>
    )
}

export default Navbar
