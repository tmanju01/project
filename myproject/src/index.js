import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Componet/Main';
import './Componet/Style.css';
import './Componet/Media.css'
import News from './Componet/News';
import Entertainment from './Componet/Entertainment';
import Technology from './Componet/Technology';
import Travel from './Componet/Travel';
import Food from './Componet/Food'
import Sports from './Componet/Sports';
import Flipboard from './Componet/Flipboard';
import Newsletter from './Componet/Newsletter';
// import Signup from './Componet/Signup';
import SignUp from './Componet/SignUp';
import Login from './Componet/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
// import News from './Componet/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/flipboard' element={<Flipboard/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
    </Router>
    {/* <Main/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
