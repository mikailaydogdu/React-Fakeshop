import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useShopping } from './Shopping';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { items } = useShopping();
    return (
        <div>
            <nav className="navbar bg-light fixed-top shadow" style={{position:"relative"}}>
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <button className="navbar-toggler" type="button">
                            Home
                        </button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className="navbar-toggler" type="button">
                            About
                        </button>
                    </NavLink>
                    <NavLink to="addProduct">
                    <button className="navbar-toggler" type="button">
                        Add Product
                    </button>
                    </NavLink>
                    <div>
                        {
                            isLogin
                                ?
                                <div>
                                    <button className="navbar-toggler" type="button">
                                        <NavLink to="sepet"> <i className="fa fa-shopping-cart"></i> </NavLink>
                                        {items.length > 0 && (
                                            <>
                                                ({items.length})
                                            </>
                                        )
                                        }
                                    </button>
                                    <NavLink to="/profile">
                                        <button className="navbar-toggler" type="button">
                                            <i className="fa fa-user"></i>
                                        </button>
                                    </NavLink>
                                    <NavLink to="/">
                                        <button className="navbar-toggler" type="button" onClick={() => setIsLogin(false)}>
                                            Çıkış
                                        </button>
                                    </NavLink>
                                </div>

                                :

                                <div>
                                    <button className="navbar-toggler" type="button">
                                        <NavLink to="sepet"> <i className="fa fa-shopping-cart"></i> </NavLink>
                                        {items.length > 0 && (
                                            <>
                                                ({items.length})
                                            </>
                                        )
                                        }
                                    </button>
                                    <button className="navbar-toggler" type="button" onClick={() => setIsLogin(true)}>
                                        Login
                                    </button>
                                </div>
                        }

                    </div>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div style={{ height: "50px" }}>Hello</div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;