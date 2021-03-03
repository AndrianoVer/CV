import React from 'react';
import './Careerprofile.css';
import logo from '../icons/contact.png';


class Careerprofile extends React.Component {
	render() {
		let a = 'I want to be part of the friendly and professional team, in which I was able to develop my React tools for the achievement of team results.'
		return (
			<header>
				<div className = "section careerprofile">
					<div className="header_wrap">
						<img src={logo} alt="logo.png"/>
						<h1 className="text-uppercase">Profile</h1>
					</div>
					<div className="career_description">
					<p className = "text-left" >
						{a}
					  You can <a href=".#">download this resume MYCV.pdf here.</a>
					</p>
					</div>														
				</div>
			</header>
		)
	}
}
export default Careerprofile;
	