import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React from 'react';

function App() {
  
    
  return (
    <>
    <Navbar title="TextUtils"  />
    <div className="container my-3">
    <TextForm heading= "Enter Text to Analyse "/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
