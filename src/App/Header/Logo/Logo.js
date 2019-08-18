import React from 'react'
import { Link } from 'react-router-dom'

import './logo.css'

const Logo = () =>
	<div className="logo">
		<Link to="/blog-project/">Gaming Blog</Link>
	</div>

export default Logo