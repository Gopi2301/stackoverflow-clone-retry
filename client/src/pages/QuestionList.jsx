import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios'

const QuestionList = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to fetch data only once when component mounts

    const fetchData = async () => {
        try {
            const question = await axios.get('http://localhost:4000/question/');
            setResponse(question.data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(response)
    return (
        <div>
            <Navbar />

        </div>
    )
}

export default QuestionList
