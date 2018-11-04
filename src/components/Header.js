import React, { Component } from 'react';
import { Link } from 'react-static';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" exact to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/createsong">
								Register Songs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/match">
								Match
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
