import React from 'react';
import './experiences.css';
import logo from '../../icons/briefcase-in-a-circle.png'


class Experiences extends React.Component {
	render() {
		return (
			<div className = "section experiences">
				<div className = "experiences_wrap">
					<img src={logo} alt="logo.png"/>
					<h1 className="text-uppercase">Employment History</h1>
				</div>
				<div className="job-description">
					<div className="job-description-wrap">
						<div className="job-title">
							<h3 className="text-left">Engineer at PJSC 'Kyivstar'</h3>
							<span>Lviv</span>
						</div>
						<div className="date">
							<span>2005 - Present</span>
						</div>				
					</div>
					<div className="experiences-desc">
						<p>
							Elimination of complex network failures. Monitoring the work of the contractor. Generation of reports
							for management
						</p>
					</div>
				</div>																			
			</div>		
		)
	}
}
export default Experiences;

