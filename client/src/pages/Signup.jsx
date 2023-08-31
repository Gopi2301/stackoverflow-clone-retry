import React, { useState } from 'react'
import '../styles/pages/--login.scss'
import SideBar from '../component/SideBar'
import { Box, Button, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import axios from 'axios';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';
// import { useAsyncValue } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigate = useNavigate()
    const [password, setPassword] = React.useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${API}/user/signup`, {
                name,
                email,
                password
            }
            )
            console.log(response.data);
            navigate('/user/login')
        } catch (error) {
            setLoading(false)
            alert(error.response.data.message)
        }

    }
    return (
        <>
            <SideBar />
            <Box className='form'
                component="form">
                <InputLabel htmlFor="outlined-name">Name</InputLabel>
                <TextField fullWidth onChange={(event) => setName(event.target.value)}
                    id="outlined-name"
                    type="text"

                />
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

                    onClick={handleSubmit}
                    loading={loading}
                    loadingIndicator="Loading…"
                    fullWidth component="div" variant="contained"
                >SignUp
                </LoadingButton>
            </Box>
        </>
    )
}

export default Signup
