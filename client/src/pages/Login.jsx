import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/pages/--login.scss'
import { useNavigate } from 'react-router-dom';
import SideBar from '../component/SideBar';
import { API } from '../global';
import LoadingButton from '@mui/lab/LoadingButton';

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
    const handleSignup = () => { navigate('/user/signup') }
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true)
        try {

            const response = await axios.post(`${API}/user/login`, {
                email,
                password
            }
            )

            setAPI_data(response.data);
            console.log(response.data);
            localStorage.setItem('token', (response.data.token))
            localStorage.setItem('name', JSON.stringify(response.data.existingUser.name))
            localStorage.setItem('email', JSON.stringify(response.data.existingUser.email))
            navigate('/question/list')
        } catch (error) {
            setLoading(false)
            setFormState('error')
        }

    }
    return (
        <>

            <SideBar />
            <Box className='form'
                component="form"
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
                <LoadingButton
                    size="small"
                    type="submit"
                    className='form__submit'
                    color={formState == "success" ? "primary" : "error"}
                    onClick={() => handleLogin()}
                    loading={loading}
                    loadingIndicator="Loading…"
                    fullWidth component="div" variant="contained"
                >
                    {formState === "success" ? "Login" : "Retry"}
                </LoadingButton>
                <Button onClick={() => handleSignup()} variant="text">Signup</Button>
                <div className='credientials'>
                    <p>Guest Credentials</p>
                    <p>Email: test@test.com</p>
                    <p>Password: test</p>
                </div>
            </Box>

        </>
    )
}

export default Login
