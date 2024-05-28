import './App.css'
import { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { TaskContextProvider } from './context/TaskContext'

import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import Navbar from './components/Navbar'


function App() {
  const navigate = useNavigate()

  useEffect(() =>{
    supabase.auth.onAuthStateChange((event, session) =>{
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })

  }, [])
  return (
    
      <div>
        <TaskContextProvider>
          <Navbar/>
          <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          </div>
        </TaskContextProvider>
      </div>
    
  )
}

export default App
