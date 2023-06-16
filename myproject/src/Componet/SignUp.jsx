import React from 'react';
import { Link } from 'react-router-dom';


function SignUp(props) {
    return (
        < >
            <div className="container-fluid  main_form">
                <div className="container w-75  form_contant">
                    <div className="row">


                        <div className="col-4 form_info">
                            <div className="logo  ">
                                <img src='img/lo.png' alt='' />
                            </div>
                            <div className="info_text text-center py-4">
                                <h3>JOIN FLIPBOARD</h3>
                                <p>Stay Informed. Stay inspired.</p>
                            </div>
                            <div className="list  py-4 px-4">
                                {/* <div className="list_main"> */}
                                <ul class="list-group ">
                                    <li class="list-group-item"> <i class="fa fa-hashtag s1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Follow Topics</li>
                                    <li class="list-group-item"><i class="fa fa-plus s1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Curate Stories</li>
                                    <li class="list-group-item"><i class="fa fa-share s1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Share Ideas</li>

                                </ul>
                                {/* </div> */}
                            </div>

                        </div>
                        <div className="col-8 form_data    text-center">
                        <span className='delete_icons_form'> <Link to={'/'} ><i class="fa fa-times-circle" aria-hidden="true"></i></Link></span>
                            
                            <form className='text-center pt-5  '>
                                <div class="mb-3">
                                   
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
                                   
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="text" class="form-control" id="exampleInputName" placeholder='Full Name' aria-describedby="nameHelp" />
            
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="password" class="form-control" placeholder='Password' id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 pt-3 ">
                                    <button type="submit" class="btn btn-primary "> Continue</button>
                                </div>
                                
                            </form>

                            <p className='pt-5'>or sign up with</p>
                            <p><span className='s1'><i class="fa fa-google" aria-hidden="true"></i></span></p>

                            <Link to={''}>Get started as a publisher</Link>
                            <p className='pt-5 pb-0 '>Already have an account?</p>
                            <Link to={''} className='link'>Log In</Link>
                            <p className='pt-5 p1'>By continuing, you accept the Terms of Use and Privacy</p>
                            
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;