import './App.css'
import { ThemeProvider } from './ThemeContext'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Photos from './components/Photos/Photos'
import ScrollToTop from './components/ScrollTo/ScrollTo'
import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation()

  const home = useRef(null)
  const about = useRef(null)
  const services = useRef(null)
  const portfolio = useRef(null)
  const contact = useRef(null)

  const scrolhome = () => home.current?.scrollIntoView({ behavior: "smooth" })
  const scrolabout = () => about.current?.scrollIntoView({ behavior: "smooth" })
  const scrolservices = () => services.current?.scrollIntoView({ behavior: "smooth" })
  const scrolportfolio = () => portfolio.current?.scrollIntoView({ behavior: "smooth" })
  const scrolcontact = () => contact.current?.scrollIntoView({ behavior: "smooth" })

  return (
    <div id="home" ref={home}>
      <ThemeProvider>
        {location.pathname === '/' &&
          <Header
            scrolhome={scrolhome}
            scrolabout={scrolabout}
            scrolservices={scrolservices}
            scrolportfolio={scrolportfolio}
            scrolcontact={scrolcontact}
          />}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home about={about} services={services} portfolio={portfolio} contact={contact} />} />
          <Route path='/photos/:id' element={<Photos />} />
        </Routes>
        {location.pathname === '/' &&
          <Footer />
        }
      </ThemeProvider>
    </div>
  )
}

export default App
