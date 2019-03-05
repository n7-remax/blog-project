import React from 'react'

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
							<h2 className="post-heading">{name}</h2>
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