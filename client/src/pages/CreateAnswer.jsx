import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import { Box, Button, TextField } from '@mui/material'
import { display } from '@mui/system'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CreateAnswer = () => {
    const { id } = useParams()
    const userId = id
    const [answerBody, setAnswerBody] = useState('');
    const navigate = useNavigate()
    const answerUser = "Admin"
    const handleInput = async () => {
        try {
            await axios.patch(`http://localhost:4000/answer/post/${id}`, {
                answerBody,
                answerUser,
                userId
            })
            navigate(`/answer/post/${id}`)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <SideBar />
            <div className='container'>
                <div className='answerInput'>
                    <Box sx={{
                        width: '100%', maxWidth: 500
                    }}>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            onChange={(event) => setAnswerBody(event.target.value)}

                        />
                        <Button variant="contained" onClick={() => { handleInput() }}>Create Answer</Button>
                    </Box>
                </div>
            </div >
        </>
    )
}

export default CreateAnswer
