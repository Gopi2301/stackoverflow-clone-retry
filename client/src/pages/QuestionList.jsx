import React, { useEffect, useState } from 'react'
import '../styles/pages/--questionList.scss'
import axios from 'axios'
import SideBar from '../component/SideBar';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import { API } from '../global';

const QuestionList = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const navigate = useNavigate()
    const handleCreateQuestion = () => {
        navigate('/question/ask')
    }
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "x-auth-token": `Bearer ${token}`
                }
            }

            const question = await axios.get(`${API}/question/`, config);
            setResponse(question.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <SideBar />
            <div className='container'>
                <Button component="div" onClick={() => handleCreateQuestion()} variant='contained'>Create Question</Button>
                {response.map((ques) => (
                    <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {ques.questionTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {ques.questionBody}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button onClick={() => { navigate(`/answer/post/${ques._id}`) }} size="small">Answer ({ques.answer.length})</Button>

                        </CardActions>
                    </Card>
                ))}

            </div>

        </div>
    )
}

export default QuestionList
