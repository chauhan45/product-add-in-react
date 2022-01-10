import React from 'react'
import _default from 'react-bootstrap/esm/ToastBody';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import Nav from '../ComponentProduct/Nav';
import Cart from '../ComponentProduct/Cart';

const Dash = ({ setLoginUser }) => {
    return (
        <>

            {/* <Switch>
                <Route path="/Home" component={Home} > <Home/> </Route>
                
            </Switch> */}

            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg rounded">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav ml-4 ms-auto font-weight-bold ">
                        <li class="nav-item">
                            {/* <button className='btn btn-info '><NavLink class="nav-link" to="/video">Video</NavLink></button> */}
                        </li>

                        {/* <li class="nav-item">
                            <div className='logout'>
                                <button className='btn btn-danger ' onClick={() => setLoginUser({})} > Logout</button>
                            </div>
                        </li> */}
                        <li class="nav-item">
                            <div class="dropdown show  ">
                                <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <NavLink class="nav-link dropdown-item " to="/Showproduct">All Products</NavLink>
                                    <NavLink class="nav-link dropdown-item " to="/mobile">Mobile</NavLink>
                                    <NavLink class="nav-link dropdown-item " to="/laptop">Laptop</NavLink>
                                    <NavLink class="nav-link dropdown-item " to="/watches">Watches</NavLink>

                                </div>
                            </div>

                        </li>

                        <li class="nav-item">
                            <button type="button" className='btn   ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/Showproduct">All Products</NavLink></button>

                        </li>
                        <li class="nav-item">
                            <button type="button" className='btn  ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/uploadform">Add Products</NavLink></button>

                        </li>
                        <li class="nav-item">
                            <button type="button" className='btn  ms-5  btn-sm'><NavLink class="nav-link btn-color" to="/HomeScreen">View Products</NavLink></button>

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