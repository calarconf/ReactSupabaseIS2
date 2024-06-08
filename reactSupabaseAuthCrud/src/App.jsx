import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom'
import { TaskContextProvider } from './context/TaskContext'

import Login from './pages/Login'
//import Home from './components/Routes/Home';
import Home from './components/Routes/compostar';
import Cuenta from './components/Routes/cuenta';
import Nosotros from './components/Routes/nosotros';
import CompostRequest from './components/Routes/CompostRequest';


import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'

import TermsAndConditions from './pages/TermsAndConditions';
import Footer from './pages/footer';



function App() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (!session) {
  //       navigate('/login')
  //     } else {
  //       navigate('/profile')
  //     }
  //   })

  // }, [])
  return (
    <>
      <div className='App'>
        <TaskContextProvider>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<Nosotros />} />
            <Route path="/compost-request" element={<CompostRequest />} />

            {/* paths a diferentes tabs de profile en Cuenta */}
            <Route path="/active-collects" element={<Cuenta />} />
            <Route path="/collect-record" element={<Cuenta />} />
            <Route path="/follow-up" element={<Cuenta />} />
            <Route path="/profile" element={<Cuenta />} />

            {/* paths a diferentes tabs de profile en Cuenta */}
            <Route path="/profile/user-profile" element={<Cuenta />} />
            <Route path="/profile/user-profile-settings" element={<Cuenta />} />
            <Route path="/profile/user-profile-security" element={<Cuenta />} />
            <Route path="/profile/user-billing" element={<Cuenta />} />

            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
        <Footer />
      </div>

    </>
  )
}

export default App