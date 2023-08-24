import React, { useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios';
import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/pages/--login.scss'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:4000/user/login', {
                email,
                password
            }
            )
            navigate('/question/list')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <Navbar />
            <Box className='form'
                component="form"

                noValidate
                autoComplete="off"
            >
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <TextField fullWidth onChange={(event) => setEmail(event.target.value)}
                    id="outlined-adornment-email"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end"><EmailIcon /></IconButton>
                        </InputAdornment>
                    }
                />
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <TextField fullWidth onChange={(event) => setPassword(event.target.value)}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                <Button type="submit" onClick={() => handleLogin()} className='form__submit' fullWidth component="div" variant="contained">Login</Button>

            </Box>
        </>
    )
}

export default Login
