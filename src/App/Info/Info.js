import React from 'react'

import './info.css'

const Info = () =>
    <info className="info">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="info-content">
                        <h3 className="info-heading">POPULAR POSTS</h3>
                        <div className="post-box">
                            <div className="latest-post">
                                <p className="info-paragraph"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="info-content">
                        <h3 className="info-heading">TWITTER</h3>
                        <div className="twitter-box">
                            <div className="twitter-message">
                                <p className="info-paragraph"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repellendus modi optio iure nisi eveniet inventore officiis veritatis beatae eos, eligendi accusamus praesentium cumque. Hic fugiat natus quaerat sunt. Cupiditate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="info-content">
                        <h3 className="info-heading">A LITTLE ABOUT ME</h3>
                        <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quibusdam repellat dolore deleniti doloremque voluptatum laudantium, ut error autem excepturi iure sapiente! Ullam pariatur deserunt laborum cumque quaerat, nostrum voluptatibus.</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="info-content">
                        <h3 className="info-heading">CONTACT FORM</h3>
                        <form>
                            <input className="contact-input" type="text" name="name" />
                            <input className="contact-input" type="text" name="email" />
                            <textarea className="contact-input contact-comment"></textarea>
                            <input className="btn contact-button" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </info>

export default Info