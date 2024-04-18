import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

const RouterOutlet = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/About' element={ <About/>} />
            <Route path='/Services' element={ <Services/>} />
            <Route path='/ContactUs' element={ <Contact/>} />
        </Routes>
        </>
    )
}
export default RouterOutlet;