import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Header(props) {
    return (
        <>
           <div className="container-fluid header ">
                <div className="row">
                    <div className="col text-center my-5">
                        <h1 className='linesize'>GET INFORMED</h1>
                        <h1 className='linesizes'>GET INSPIRED</h1>
                        <div className='line'></div>     
                        <h4 className='mt-3 fs-4'>Stories Curated For You</h4>
                        <Link className='btn singup mt-4' to={'/signup'}>Sing Up</Link>
                        <button className='btn app mt-4'>Download the app</button>  
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Header;