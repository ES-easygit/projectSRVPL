import React from 'react';
import './App.css';
import "./styles/color.scss";
import Firstpart from './components/Firstpart';
import Secondpart from './components/Secondpart';
import Thirdpart from './components/Thirdpart';
import arrow1 from './assets/arrow1.png';
import arrow2 from './assets/arrow2.png';


function App() {
  return (
    <>
    <div className='app'>
      <div className='topHead'>
         <h1 className='head'>How to choose what you like ?</h1>
         <div className='para'>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> </div>
      </div>
      <div className='components'>
      <Firstpart/>
      <img src={arrow1} className="arrow" alt='First arrow'/>
      <Secondpart/>
      <img src={arrow2}  className="arrow" alt='Second arrow'/>
      <Thirdpart/>
      </div>
      </div>
    </>
  );
}

export default App;
