import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h2>iNotebook</h2>
            <p>An E-commerce website.</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>

        <div class="footer-column">
            <h3>Company</h3>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Contact Us</a></p>
        </div>

        <div class="footer-column">
            <h3>Features</h3>
            <p><a href="#">Insert</a></p>
            <p><a href="#">Update</a></p>
            <p><a href="#">Delete</a></p>
            <p><a href="#">Share</a></p>
        </div>

        <div class="footer-column">
            <h3>Contact</h3>
            <p>+91555555555555</p>
            <p>Inotebook@gmail.com</p>
            <p>30 N Tramba St Ste R<br/>Rajkot, WY 36000</p>
        </div>
    </div>

    <div class="footer-bottom">
        <p>Need Help Customizing Your Site?</p>
        <p>Get personalized page adjustments from our expert team to make your site stand out.</p>
        <button class="cta-button" style={{width:"180px"}}>Get in Touch</button>
        <p>© All rights reserved. Flowfye.</p>
    </div>
</footer>

    </div>
  )
}
