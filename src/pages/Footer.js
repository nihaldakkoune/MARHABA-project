import React, { Fragment } from "react";



function Footer(){
    return(
        <Fragment>
      

    <footer>
        <div className="footer-content">
            <h3>MarHaba Website</h3>
            <p>At MarHaba website, we offer professional translation services in Arabic . We pride ourselves on providing the most efficient and high-quality translations, with a focus on secure and fast transactions. <br></br>Contact us now for a free quote</p>
            <ul className="socials">
                <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            <p>Copyright © 2023 Created By RABIH Rayhana, DAKKOUNE Nihal and EL AOUINA Nizar <br></br>All Rights Reserved.</p>
            <div className="canvas">
    <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=stade%20of%20doha%20qatar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
        </div>
        
       

    </footer>
            
        </Fragment>
    )
}

export default Footer;