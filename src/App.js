import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { NotFound } from './pages/notfound/NotFound.jsx';
import { Navigation } from './pages/nav/navigation.jsx';
import { Footer } from './pages/footer/footer.jsx';
import { About } from './pages/about/about.jsx';
import ScrollToTop from "./pages/scrollToTop.jsx";
import { Services } from './pages/service/services.jsx';
import { Contact } from './pages/contact/contact.jsx';
import { ServiceForm } from './pages/serviceForm/serviceForm.jsx';
import ThankYou from './pages/thankyou/thankYou.jsx';
import {ServiceDetail} from './pages/serviceInfo/ServiceInfo.jsx';

function App() {
  return (
    <>
    
    <Router>
    <ScrollToTop /> 
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path='/services' element={<Services/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-form" element={<ServiceForm/>} />
        <Route path='*' element={<NotFound/>}/>
        <Route path="/service-detail/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer/>
    </Router>
   
    </>
   
  );
}

export default App;
