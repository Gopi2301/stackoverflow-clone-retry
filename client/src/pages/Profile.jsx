import React from 'react'
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/--Profile.scss'
import SideBar from '../component/SideBar';
const Profile = () => {
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const navigate = useNavigate()
    const handleClose = () => {
        navigate('/question/list')
    }
    return (
        <>
            <SideBar />
            <Card className="container" sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name:{name}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Email: {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => { handleClose() }} variant='contained' size="small">Close</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Profile
