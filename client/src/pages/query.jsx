import React, { useState } from 'react'
import Sidebar from '../component/SideBar'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'
import '../styles/pages/--CreateQuestion.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateQuestion = () => {
    const [userPosted, setUserPosted] = useState('Admin')
    const navigate = useNavigate();
    const [questionTitle, setQuestionTitle] = useState();
    const [questionBody, setQuestionBody] = useState();
    const [questionTags, setQuestionTags] = useState([]);
    const [api_Data, setApi_Data] = useState('')
    const handleCreateQuestion = async () => {

        try {
            const token = localStorage.getItem('token');
            console.log(token);

            const requestData = {
                questionTitle,
                questionBody,
                questionTags,
                userPosted
            };

            const config = {
                headers: {
                    "x-auth-token": `Bearer ${token}`
                }
            };

            await axios.post('http://localhost:4000/question/ask', requestData, config);

            navigate('/question/list');
        } catch (error) {
            console.log(error.response.data);
        }
        setQuestionTitle('');
        setQuestionBody('');
        setQuestionTags([]);
    };
    const postAPI = async (req, res) => {


    }
    return (
        <>
            <Sidebar />
            <div className='container'>
                <Box
                    className='form'
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}

                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Question Title"
                        value={questionTitle}
                        onChange={(event) => { setQuestionTitle(event.target.value) }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Question Body"
                        value={questionBody}
                        onChange={(event) => { setQuestionBody(event.target.value) }}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Question Tags"
                        value={questionTags}
                        onChange={(event) => { setQuestionTags(event.target.value.split(",")) }}

                    />
                    <Button variant='contained' onClick={() => handleCreateQuestion()}>Create Question</Button>
                </Box>
            </div>
        </>
    )
}

export default CreateQuestion
