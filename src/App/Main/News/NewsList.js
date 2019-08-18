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
                                    <img src={image} alt={name} />
                                </div>
                                <div className="description">
                                    <Link to={`/blog-project/${id}`} className="post-heading">{name}</Link>
                                    <p className="text">{description.substr(0, 300)}</p>
                                </div>
                                <div className="date">
                                <p>{date}</p>
                                </div>
                            </div>

                        </div>
                    ))
            }
        </div>
        <div className="next">
		<div className="container">
			<div className="row">
				<div className="next-block">
					<button className="btn btn-old-posts">Older Posts</button>
				</div>
			</div>		
		</div>
	</div>

    </div>
    


export default NewsList