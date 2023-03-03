import './App.css';
import Home from './Home';
import Profile from './Profile';
import { Route,Routes } from 'react-router-dom';

function App() {



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
