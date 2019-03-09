import React from 'react'

import './NewsPage.css'

import news from '../News/news'


const NewsPage = ({
    match

}) => {
    const currentNews = news.find(e => e.id === +match.params.id)

    return (

        <div>
            <div className="col-7">
                <div className="news-content">
                    <div className="news-header">
                        <div className="col-1">
                            <div className="date-circle">
                                <p className="header-date">23 Feb</p>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="news-name">
                                <h1>{currentNews.name}</h1>
                            </div>
                            <div className="news-tags">
                                <p>#newsID {match.params.id}</p>
                            </div>
                        </div>
                        <div className="news-image">
                            <img src={currentNews.image} alt={currentNews.name} />
                        </div>
                    </div>
                    <div className="news-description">
                        <p>{currentNews.description}</p>
                    </div>
                    <div className="recent-post-box">
                        <div className="recent-post-header">
                            <h2 className="secondary-headers">Recent News</h2>
                        </div>
                        <div className="recent-post">
                            <div className="img-container">
                                <img src="images/news/test2.jpg" alt="news-content" />
                            </div>
                            <div className="img-container">
                                <img src="images/news/test2.jpg" alt="news-two" />
                            </div>
                            <div className="img-container">
                                <img src="images/news/test2.jpg" alt="news-three" />
                            </div>
                            <div className="img-container">
                                <img src="images/news/test2.jpg" alt="news-fourth" />
                            </div>
                        </div>
                    </div>
                    <div className="news-comments">
                        <div className="news-comments-header">
                            <h2 className="secondary-headers">Comments</h2>
                        </div>
                        <div className="comments-section">
                            <div className="comment">
                                <h3 className="name">Indro</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam consequatur pariatur architecto nisi totam unde, tenetur in dignissimos aut odit, error nam ea. Perspiciatis modi nostrum neque, eaque fuga laudantium.</p>
                            </div>
                        </div>
                        <div className="comments-form">
                            <h2 className="secondary-headers">Submit a Comment</h2>
                            <form>
                                <input className="comments-input" type="text" name="name" placeholder="Name" />
                                <input className="comments-input" type="text" name="email" placeholder="Email" />
                                <textarea className="comments-textarea"></textarea>
                                <input className="btn comments-button" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="side-bar">
                    <div className="side-bar-heading">
                        <h2 className="secondary-headers">Game Info</h2>
                    </div>
                    <div className="side-bar-descrtiption">
                        <p><b>Developer:</b> Respawn Entertainment</p>
                        <p><b>Genre:</b> Action, Shooter, First-Person, Tactical</p>
                        <p><b>Rating:</b> T</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default NewsPage
