import React from 'react';
import { Link, Route,  Routes, } from 'react-router-dom';
// import News from './News';
// import  Entertainment from './Entertainment'
// import 




function Menu(props) {
    return (
        <>
        
           <nav class="navbar menu navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-5 nav1">
          <Link class="nav-link active" aria-current="page" to={'/news'}>NEWS</Link>
        </li>
        <li class="nav-item nav1 mx-5  ">
          <Link class="nav-link" to={'/entertainment'}>ENTERTAINMENT</Link>
        </li>
        <li class="nav-item mx-5 nav1 ">
          <Link class="nav-link"to={'/technology'}>TECHNOLOGY</Link>
        </li>
        <li class="nav-item mx-5 nav1">
          <Link class="nav-link"to={'/travel'}>TRAVEL</Link>
        </li>                                                           
        <li class="nav-item mx-5 nav1">
          <Link class="nav-link"to={'/food'}>FOOD</Link>
        </li>
        <li class="nav-item mx-5 nav1">
          <Link class="nav-link"to={'/sports'}>SPORTS</Link>
        </li>
        <li class="nav-item mx-5 nav1">
          <Link class="nav-link"to={'/flipboard'}>FLIPBOARD TV</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

{/* <Routes>
    <Route path='/news' element={<News/>}/>
</Routes> */}


        </>
    );
}

export default Menu;