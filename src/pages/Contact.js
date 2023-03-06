import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";


function Contact(){
    return(
        <Fragment>
            <div className='hero2'>
            <Menu/>
            </div>
           <section id="hero">
            <div className="container1">
                <div className="contact-box">
                   
                    <div className="right">
                        <h2 className="titleh2">Contact Us</h2>
                        <input type="text" className="field" placeholder="Your Name"/>
                        <input type="text" className="field" placeholder="Your Email"/>
                        <input type="text" className="field" placeholder="Phone"/>
                        <textarea placeholder="Message" className="field"></textarea>
                        <button className="btn1">Send</button>
                    </div>
                    <div className="left"></div>
                </div>
            </div> 
            </section>
            <div className="footer2">
                <Footer/>
            </div>
        </Fragment>
    )
}



export default Contact;