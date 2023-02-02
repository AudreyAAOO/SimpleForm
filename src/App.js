// import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/Form';
//import Results from './Components/Results';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>

      <Form/>

      </div>

      <Footer />
    </div >
  )
}

export default App;
