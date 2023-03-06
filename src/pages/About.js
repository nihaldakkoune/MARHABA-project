import React, { Fragment } from "react";

function About(){
    return(
        <Fragment>
    <div className="diffSection">
	<div className="sideImage sideImage-appear">
				<img src="assets/images/laeeb.png"/>
			</div>
		<div className="about-content">
			<div className="content-section">
				<div className="side-text side-text-appear">
					
				
				<div className="content">
				<h3> MarHaba will set you appart !</h3>
					<p>Marhaba is the ideal website to help international supporters in Qatar to learn and communicate in Arabic.
                        Marhaba also displays real-time weather informations of Doha.
                        Have fun in Qatar and Marhaba ! <br></br>
						To have more informations about us , visit our social media pages !</p>
					{/* <div className="button">
						<a href="">Read More</a>
					</div> */}
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
				</div>
			</div>
			
			
		</div>
		
		</div>
	
        </Fragment>
		
		
    )
}


export default About;