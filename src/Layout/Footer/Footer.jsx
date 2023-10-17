import React from 'react';
import '../../StyleComponent/Footer.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Footer = () => {
  return (
    <div>
      <footer>
        <section class="button-section-part">
          <div class="container">
            <div class="box-section-part">
              <div class="box-section-part-left">
                <h3>About us</h3>
                <p>It was popularized in the 1960s with the release of the Latest sheets containing Lorem Ipsum passage.</p>
                <button>Read More</button>
              </div>
              <div class="box-section-part-left">
                <h3>Quick Links</h3>
                <div>
                  <ul class="box-section-part-left-ul">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="hollywood">HollyWood <LocalMoviesIcon /></a>
                    </li>
                    <li>
                      <a href="bollywood">BollyWood <LocalMoviesIcon /></a>
                    </li>
                    <li>
                      <a href="popular-movie">Popular <LocalMoviesIcon /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box-section-part-left">
                <h3>Follow Us</h3>
                <div>
                  <ul class="box-section-part-left-ul">
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        Facebook <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank">
                        Twitter <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjtsOThovGBAxWlbWwGHcR3Ax0QPAgI" target="_blank">
                        Google + <GoogleIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank">
                        Instagram <AddAPhotoIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box-section-part-left">
                <h3>Contact us</h3>
                <div>
                  <ul class="box-section-part-left-ul">
                    <li>
                      <a href="#">Phone No <AddIcCallIcon /></a>
                    </li>
                    <li>
                      <a href="#">Email Address <AttachEmailIcon /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="last-button-section">
          <div class="last-button-section-h3">
            <h3>Copyright © 2023. All rights reserved by <a href="#">smovix</a></h3>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
