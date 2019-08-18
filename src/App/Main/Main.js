import React from 'react'
import { Route } from 'react-router-dom'
import NewsList from './News/NewsList';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio'
import About from './About/About'
import Contact from './Contact/Contact'
import NewsPage from './NewsPage/NewsPage';

const Main = () =>
	<main className="main">
		<div className="container">
			<div className="row">
				<Route exact path="/blog-project" render={() => <NewsList
				/>} />
				<Route path="/newspage/:id" component={NewsPage}/>
				<Route path="/service" component={Service} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</div>
		</div>
	</main>

export default Main