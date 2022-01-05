import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/image1.jpeg'
import image1 from '../images/image6.jpg'
import logo  from '../images/logo.png'

export const Navbar = ({setLoginUser}) => {
    return (
        <>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand " >
                <img src={logo} alt="..."  />            
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                 <h4 className='masala'> FENTA VIDEO</h4>
                    <ul class="navbar-nav ml-4 ms-auto font-weight-bold  ">
                    <li class="nav-item">
                    <Link class="nav-link text-danger" to="Home" >Home</Link>
                    </li>
                    <li class="nav-item">
                            <Link class="nav-link" to="contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Login">Login</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link" to="Signup">Signup</Link>
                        </li>
                        
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="Datashow">Datashow</Link>
                        </li> */}

                        {/* <li class="nav-item">
                            <Link class="nav-link" to="paypal">Paypal</Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="UploadForm">UploadVideo</Link>
                        </li> */}

                        {/* <li class="nav-item">
                        <button className='btn btn-danger ' onClick={()=> setLoginUser({})} > Logout</button>
                        </li> */}


                        {/* <li class="nav-item">
                            <Link class="nav-link" to="UploadList">UploadList</Link>
                        </li> */}
                        
                    </ul>
                </div>
            </nav> 
            
        </>
    )
}
