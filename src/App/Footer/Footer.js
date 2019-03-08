import React from 'react'

import './footer.css'

const Footer = () =>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="footer-copyright-box">
                        <p className="footer-copyright"> © 2019</p>
                    </div>
                </div>
                <div className="col-5">
                    <div className="footer-icons-box">
                        <a href="#" className="fa fa-rss"></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-dribbble"></a>
                        <a href="#" className="fa fa-pinterest"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Footer