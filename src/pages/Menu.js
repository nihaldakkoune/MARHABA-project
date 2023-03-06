import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Menu(){
    return(
        <Fragment>
          <header className="header">
            <div className="container-menu">
                <nav className="navigation">
                    <Link to="/" className="logo">
                        <img src="assets/images/logo2.png" alt="Logo" className="logo-img" />
                    </Link>
                    
                    <div className="mobile-menu-icon">
                        <ion-icon name="menu-outline" className="menu_icon"></ion-icon>
                    </div>
                    <ul className="nav_menu">
                        <li className="nav_list">
                            <Link to="/" className="nav_link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav_list">
                            <a href="#about" className="nav_link">About</a>
                        </li>
                        <li className="nav_list">
                            <Link to="/match" className="nav_link" target="_matches">
                                Learn Arabic
                            </Link>
                     
              </li>
              <li className="nav_list">
                            <Link to="/contact" className="nav_link">
                                Contact Us
                            </Link>
                </li>
                        <li className="nav_list btn-nav">
                            <Link to="/translate" className="btn-outline">
                            <span>Let's translate</span>
                            <ion-icon name="compass-outline"></ion-icon>
                            </Link>
                                
                        </li>
                    </ul>
                </nav>
            </div>
        </header> 
        </Fragment>
    )
}

export default Menu;
