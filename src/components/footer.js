import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
   return (
      <footer className="footer-wrapper">
         <div className="container">
            <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="logo">
                     <img src="/logo-black.png" alt="footerLogo" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tenetur?</p>
                  <div className="social-media">
                     <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                     <Link to="#"><i className="fab fa-instagram"></i></Link>
                     <Link to="#"><i className="fab fa-twitter"></i></Link>
                     <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                  </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="details">
                     <h5>Contact info</h5>
                     <div className="information">
                        <p><i className="fas fa-phone"></i>9881336356</p>
                        <p><i className="fas fa-envelope"></i>email@gmail.com</p>
                        <p><i className="fas fa-map-marked"></i>Tg complex, koteshwar,Kathmandu,Nepal</p>

                     </div>
                  </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="links">
                     <h5>Activities</h5>
                     <Link to="#">Event</Link>
                     <Link to="#">Notice</Link>
                     <Link to="#">Gallery</Link>
                     <Link to="#">News</Link>
                  </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="location">
                     <h5><i style={{ padding: '5px' }} className="fas fa-map-marker-alt"></i>Map</h5>
                     <div id="map-container-google-2" className="z-depth-1-half map-container">
                        <iframe className="shadow" title="googlemap" src="https://maps.google.com/maps?q=dakshyaNepal&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr></hr>
         <center>
            <p>Copyright © Secondary School Theme by dakshya Nepal</p>
         </center>
      </footer>

   );
}

export default Footer;

