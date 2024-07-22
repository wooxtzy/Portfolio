import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import './assets/scss/main.scss'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import Aos from 'aos'
import portfolioContext from './context/portfolioContext'

function App() {

  Aos.init()
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  
  useEffect(()=>{
    if(!theme)
    localStorage.setItem('theme', 'light')
  
  }, [])
  
  
  const changeTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
    }
    else if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
    }
    setTheme(localStorage.getItem('theme'))
  }

  return (
    <>
      <portfolioContext.Provider value={{
        theme,
        changeTheme,
      }}>
        <div className="wrap">
     
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer></Footer>
             <ToastContainer />
        </div>
        
      </portfolioContext.Provider>

    </>
  )
}

export default App
