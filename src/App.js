import React from 'react';
import Navbar from './Layouts/Navbar';
import RouterOutlet from "./RouterOutlet";
import Footer from './Layouts/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <RouterOutlet/>
      <Footer/>
    </div>
  );
}

export default App;
