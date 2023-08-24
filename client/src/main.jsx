import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.jsx';
import QuestionList from './pages/QuestionList.jsx';
import CreateQuestion from './pages/CreateQuestion.jsx';
import Question from './pages/Question.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/login",
    element: <Login />
  },
  {
    path: "/question/list",
    element: <QuestionList />
  },
  {
    path: "/question/ask",
    element: <CreateQuestion />
  },
  {
    path: '/answer/post/:id',
    element: <Question />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
