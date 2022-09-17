import React,{FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";


const App:FC=() => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
