import React, { useState } from 'react';
import Navbar from '../component/navbar';
import axios from 'axios';
import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/pages/--login.scss'
import { useNavigate } from 'react-router-dom';
import SideBar from '../component/SideBar';


const Login = () => {
    const navigate = useNavigate()
    const [API_data, setAPI_data] = useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [formState, setFormState] = useState('success');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/user/login', {
                email,
                password
            }
            )
            setAPI_data(response.data);
            console.log(response.data);
            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('name', JSON.stringify(response.data.existingUser.name))

            navigate('/question/list')
        } catch (error) {
            setFormState('error')
        }

    }
    return (
        <>

            <SideBar />
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
                <Button type="submit" color={formState == "success" ? "primary" : "error"} onClick={() => handleLogin()} className='form__submit' fullWidth component="div" variant="contained">{formState === "success" ? "Submit" : "Retry"}</Button>

            </Box>
        </>
    )
}

export default Login
