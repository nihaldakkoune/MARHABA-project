import React, { Fragment } from "react";
import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Index(){
    return(
        <Fragment>
    <section id="hero">
        <Menu/>
        
        <div className="hero-main-container">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="section-heading">
                            ARABIC will set you apart!
                        </h1>
                        <p className="paragraph">
                           Learn Arabic and open a world of culture in the Fifa world cup Qatar 2022 <br></br> <br/>
                          " يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًا وَقَبَآئِلَ لِتَعَارَفُوٓاْ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ  "
                        </p>
                        <Link to='/match' className="btn-primary-start">
                        <span>Start here!</span>
                            <ion-icon name="log-out-outline"></ion-icon>
                        </Link>
                       
                    </div>
                    <div className="hero-image">
                        <img src="assets/images/mascot.png" alt="hero-img" className="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="about">
    <About/>
    </div>
   
   
        <Footer/>
    
        </Fragment>  
    )
}


export default Index;
