import React from 'react'
import img_footer from '../assets/images/background-lines-white-right.svg'
import img_logo_white from '../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
    <div class="footer-top">
        <img class="footer-image" src={img_footer} alt="background-lines" />

        <div class="container">
            <div class="footer-text">
                <img src={img_logo_white} alt="crito logotype" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                    voluptates!
                    Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>

            <div class="footer-item">
                <h3>Company</h3>
                <a href="@">About</a>
                <a href="@">Features</a>
                <a href="@">Works</a>
                <a href="@">Career</a>
            </div>
            <div class="footer-item">
                <h3>Help</h3>
                <a href="@">Customer Support</a>
                <a href="@">Delivery Details</a>
                <a href="@">Terms & Conditions</a>
                <a href="@">Privacy Policy</a>
            </div>
            <div class="footer-item">
                <h3>Resources</h3>
                <a href="@">Free eBooks</a>
                <a href="@">Development Tutorial</a>
                <a href="@">How to - Blog</a>
                <a href="@">Youtube Playlist</a>
            </div>
            <div class="footer-item">
                <h3>Link</h3>
                <a href="@">Free eBooks</a>
                <a href="@">Development Tutorial</a>
                <a href="@">How to - Blog</a>
                <a href="@">Youtube Playlist</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom container">
        <div>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
        <div class="social-media">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
</footer>
  )
}

export default Footer