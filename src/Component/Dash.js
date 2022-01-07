import React from 'react'
import _default from 'react-bootstrap/esm/ToastBody';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import Nav from '../ComponentProduct/Nav';
import Cart from '../ComponentProduct/Cart';

const Dash = () => {
    return (
        <>
       
            {/* <Switch>
                <Route path="/Home" component={Home} > <Home/> </Route>
                
            </Switch> */}

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav ml-4 ms-auto font-weight-bold ">
                        <li class="nav-item">
                            {/* <button className='btn btn-info '><NavLink class="nav-link" to="/video">Video</NavLink></button> */}
                        </li>

                        <li class="nav-item">
                            {/* <button className='btn btn-info ms-5'><NavLink class="nav-link" to="/Product">Add Product</NavLink></button> */}
                        </li>
                        
                        <li class="nav-item">
                            <button type="button" className='btn   ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/Showproduct">Show Product</NavLink></button>
                            
                        </li>
                        <li class="nav-item">
                            <button type="button" className='btn  ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/uploadform">Add Product</NavLink></button>
                            
                        </li>
                        <li class="nav-item">
                            <button type="button" className='btn  ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/HomeScreen">View Product</NavLink></button>
                            
                        </li>
                    </ul>
                </div>
                <Nav />
                <Cart />
            </nav>
           
        </>
    )
}
export default Dash;