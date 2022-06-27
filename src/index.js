import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import { BrowserRouter, Routes , Route} from 'react-router-dom'

import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'
import Home from './App.js'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/cadastrar' element ={<Cadastrar/>}/>
      <Route path='/consultar' element ={<Consultar/>}/>
      <Route path='/' element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
