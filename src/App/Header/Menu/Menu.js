import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'

const Menu = () => 
<div className="menu">
	<ul>
	  <li><Link to="/blog-project">Home</Link></li>
	  <li><Link to="/service">Service</Link></li>
	  <li><Link to="/portfolio">Portfolio</Link></li>
	  <li><Link to="/about">About</Link></li>
	  <li><Link to="/blog-project">Blog</Link></li>
	  <li><Link to="/contact">Contact</Link></li>
	</ul>
</div>

export default Menu