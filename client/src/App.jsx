import { useState } from 'react'
import './App.css'
import Navbar from './assets/component/Navbar'
import '../src/styles/app.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
