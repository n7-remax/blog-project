import React from 'react'
import { Link } from 'react-router-dom'

import './NewsList.css'

import news from './news'

const NewsList = () =>
    <div>
        <div className="row">
            {
                news.map(({
                    id,
                    name,
                    description,
                    date,
                    image,
                }) => (
                        <div className="col-3" key={id}>
                            <div className="content-block">
                                <div className="image">
                                    <img src={image} alt="test" />
                                </div>
                                <div className="description">
                                    <Link to={`/newspage/${id}`} className="post-heading">{name}</Link>
                                    <p className="text">{description}</p>
                                </div>
                                <div className="date">
                                    {date}
                                </div>
                            </div>

                        </div>
                    ))
            }
        </div>

    </div>


export default NewsList