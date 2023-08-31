import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.jsx';
import QuestionList from './pages/QuestionList.jsx';
import CreateQuestion from './pages/CreateQuestion.jsx';
import Question from './pages/Question.jsx'
import CreateAnswer from './pages/CreateAnswer.jsx';
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'

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
    path: "/user/signup",
    element: <Signup />
  },
  {
    path: "/question/list",
    element: <ProtectedRoute><QuestionList /></ProtectedRoute>
  },
  {
    path: "/question/ask",
    element:
      <ProtectedRoute><CreateQuestion /></ProtectedRoute>

  },
  {
    path: '/answer/post/:id',
    element: <Question />
  },
  {
    path: '/answer/create/:id',
    element: <CreateAnswer />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
