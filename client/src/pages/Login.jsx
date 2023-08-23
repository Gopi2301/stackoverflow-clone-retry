import React from 'react'
import Navbar from '../component/navbar'
import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/pages/--login.scss'
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Navbar />
            <Box className='form'
                component="form"

                noValidate
                autoComplete="off"
            >
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <TextField fullWidth
                    id="outlined-adornment-email"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end"><EmailIcon /></IconButton>
                        </InputAdornment>
                    }
                />
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <TextField fullWidth
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
                <Button type="submit" className='form__submit' fullWidth component="div" variant="contained">Login</Button>

            </Box>
        </>
    )
}

export default Login
