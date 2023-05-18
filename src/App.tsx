import React from 'react';

import './App.css';
// import NavbarSlide from './components/NavbarSlide';
import { Navbar } from './components/Navbar';
// import OTPForm from './components/OTPForm';

function App() {
  return (
    <div>
      <div className='w-screen'>
        {/* <OTPForm digit={6}/> */}
        <Navbar />
      </div>
    </div>
  );
}

export default App;
