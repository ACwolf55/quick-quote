import './App.css';
import Home from './Home';
import Profile from './Profile';
import { Route,Routes } from 'react-router-dom';
import React,{useEffect} from 'react'
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios.put(`/traffic-counter/Quick-Quote`).then((res)=>{
      
    })

  },[])

  return (
  <div className="App">

    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/:organization' element={<Profile/>} />
    </Routes>
  
  </div>
  );
}

export default App;
