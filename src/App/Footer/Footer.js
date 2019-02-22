import React from 'react'

import './footer.css'

const Footer = () =>
    <footer className="footer">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="footer-copyright-box">
                        <p class="footer-copyright"> © 2019</p>
                    </div>
                </div>
                <div class="col-5">
                    <div class="footer-icons-box">
                        <a href="#" class="fa fa-rss"></a>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-dribbble"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

export default Footer