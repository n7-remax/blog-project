import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () =>
	<header className="header">
		<div className="container">
			<div className="row">
				<div className="col-5">
					<Logo />
				</div>
				<div className="col-5">
					<Menu />
				</div>
			</div>
		</div>
	</header>

export default Header