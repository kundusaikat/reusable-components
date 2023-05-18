import React from 'react';

import './App.css';
import OTPForm from './components/OTPForm';

function App() {
  return (
    <div>
      <div className='w-6/12 m-auto'>
        <OTPForm digit={6}/>
      </div>
    </div>
  );
}

export default App;
