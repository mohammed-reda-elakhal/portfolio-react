import React, { useEffect } from 'react'
import About from './Components/about/About.jsx'
import Contact from './Components/contact/Contact.jsx'
import Experience from './Components/experience/Experience.jsx'
import Footer from './Components/footer/Footer.jsx'
import Header from './Components/header/Header.jsx'
import Nav from './Components/nav/Nav.jsx'
import Portfolio from './Components/portfolio/Portfolio.jsx'
import Services from './Components/services/Services.jsx'
import Testimonials from './Components/testimonials/Testimonials.jsx'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Components/admin/Login.jsx'

const App = () => {

    useEffect(() => {
      window.scrollTo(0, 0); // Fait défiler en haut de la page lors du chargement
    }, []);
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App