import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <React.Fragment>
      <Router>
      <NavBar />
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about-us' element={<About />} />
     <Route path='/services' element={<Services />} />
     <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </Router>
    </React.Fragment>
 
    
  );
}

export default App;
