import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import LoginForm from './components/LoginForm'
import Services from './pages/Services'
import ServicesDetails from './pages/ServicesDetails'
import BookedData from './components/BookedData'
import AboutUs from './pages/AboutUs'
import OurWork from './components/OurWork'
import InsightsPage from './pages/InsightsPage'
import "./App.css"
import LocomotiveScroll from 'locomotive-scroll'
import Footer from './components/Footer'
import ContactForm from './pages/ContactForm'

function ScrollWrapper({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2,
    });
  
    // Update when route changes
    setTimeout(() => {
      scroll.update();
    }, 500);
  
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location.pathname]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div>

      <Router>
        <Navbar user={loggedInUser}/>
        <ScrollWrapper>
        <Routes>
          <Route path="/" element={<LoginForm setLoggedInUser={setLoggedInUser} />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='/services/:id' element={<Services />} /> */}
          <Route path='/services/:id' element={<ServicesDetails />} />
          <Route path='/services/:id' element={<BookedData />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ourwork' element={<OurWork />} />
          <Route path='/insightspage' element={<InsightsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          </Routes>
         
          </ScrollWrapper>
      </Router>

      

      
    </div>
  )
}

export default App
