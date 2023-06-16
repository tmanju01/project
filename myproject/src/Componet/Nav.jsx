import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>
      <img src='img/logo.png' alt='logo'/>
        FLIPBOARD
    </Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
    
      <ul className="navbar-nav ">
       
        <li className="nav-item pt-2">
          <Link className="nav-link news news1" to={'/newsletter'}>Newsletters</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link news" to={''}> 
          <input className="form-control  me-2 " type="text" placeholder="Search Flipboard"/>
          </Link>
        </li>
        <li className="nav-item pt-2 ">
        <Link  className="nav-link news openapp mx-2" style={{border:"1px solid red"}} to={''}>Open in App </Link>
        </li>
        <li className="nav-item pt-2 singupbtn">
          <Link  className="nav-link news text-white" to={'/signup'}>Sign Up </Link>
        {/* <button className="btn singupbtn mx-2" type="button" onClick={}>Sign Up</button> */}
        </li>
        <li className="nav-item pt-2">
        {/* <button className="btn  mx-2 news" type="button">Login</button> */}
        <Link  className="nav-link  news" to={'/login'}>Login</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav> 

<input className="form-control  input me-2 " type="text" placeholder="Search Flipboard"/>

<div className="container nav_logo">
<Link className="navbar-brand " to={'/'}>
      <img src='img/logo.png' alt='logo'/>
        FLIPBOARD
    </Link>
    </div>
        </>
    );
}

export default Nav;