import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Navigation } from './pages/navigation.jsx';
import { Footer } from './pages/footer.jsx';
import { About } from './pages/about.jsx';
import ScrollToTop from "./pages/scrollToTop.jsx";
import { Services } from './pages/services.jsx';
import { Contact } from './pages/contact.jsx';
import { ServiceForm } from './pages/serviceForm.jsx';
function App() {
  return (
    <>
    
    <Router>
    <ScrollToTop /> 
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-form" element={<ServiceForm/>} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    </>
   
  );
}

export default App;
