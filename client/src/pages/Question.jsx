import React, { useEffect, useState } from 'react'
import SideBar from '../component/SideBar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const Single = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        questionTitle: '',
        questionBody: '',
        answer: [],
    });
    const fetchQuestion = async () => {
        try {
            const data = await axios.get(`http://localhost:4000/question/post/${id}`);
            setData(data.data)

        } catch (error) {
            console.log(error);
        }
    }
    console.log(data)
    useEffect(() => { fetchQuestion() }, []);
    return (
        <>
            <SideBar />
            <div className='container'>
                <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom> {data.questionTitle}</Typography>
                <br />
                <Typography variant="h5" sx={{ fontSize: 22 }} component="div">{data.questionBody}</Typography>
                <br />
                <Typography variant="h5" sx={{ fontSize: 22 }} color="primary" component="div">Public Answers</Typography>
                <br />
                {data.answer.length > 0 && data.answer.map((ele) => (
                    <Card>
                        <CardContent>
                            <Typography variant="body2">
                                {ele.answerBody}
                            </Typography>
                            <br />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                answerBy:{ele._id}
                            </Typography>
                        </CardContent>
                    </Card>

                ))}


                <Button variant="contained" onClick={() => navigate(`/answer/create/${id}`)} size="small">Create Answer</Button>

            </div>
        </>
    )
}

export default Single
