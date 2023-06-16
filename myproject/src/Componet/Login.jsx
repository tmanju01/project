import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <>
           <div className="container-fluid login_form">
            <div className=" container login_contant text-center">
                {/* <span className='delete_icons'><i class="fa fa-times-circle" aria-hidden="true"></i></span> */}
               <span className='delete_icons'> <Link to={'/'} ><i class="fa fa-times-circle" aria-hidden="true"></i></Link></span>
                 <img src='img/logo.png' alt='' className='mt-4'/>
                 <h1 className='pt-4'>LOG IN TO FLIPBOARD</h1>
                 <p><span className='s1'><i class="fa fa-google" aria-hidden="true"></i></span></p>
                 <Link to={''} className=''>Get log in link</Link>
                 <p className='mt-3'>or with email</p>

                 <form className='text-center  form_type '>
                                <div class="mb-3">
                                   
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
                                   
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="text" class="form-control" id="exampleInputName" placeholder='Full Name' aria-describedby="nameHelp" />
            
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="password" class="form-control" placeholder='Password' id="exampleInputPassword1" />
                                </div>
                                <p className='para text-end'><Link to={''}>Forgot your password?</Link></p>
                                <div class="mb-3 pt-2">
                                    <button type="submit" class="btn btn-primary ">Log In</button>
                                </div>
                                
                            </form>
                            <p className='sign_link'>New to Flipboard?<Link to={''}>Sign Up</Link></p>
                            <p>By continuing, you accept the Terms of Use and Privacy Policy.</p>
            </div>
            
            </div> 
        </>
    );
}

export default Login;