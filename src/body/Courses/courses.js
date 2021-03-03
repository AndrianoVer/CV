import React from 'react';
import './courses.css';
import logo from '../../icons/courses.png'


class Courses extends React.Component {
	render() {
		return (
			<div className = "section projects">
			<div className = "projects_wrap">				
				<img src={logo} alt="logo.png"/>
				<h1 className="text-uppercase">Courses</h1>
			</div>
			<div className="project-desc">
				<p className="text-left">
					Here the List of my finished courses:
				</p>
			</div>					
			<div className="projects-box">
				<p className = "text-left" >
					<a href=".#">QATestLab</a> - The Fundamentals of Software Testing. June 2020.
				</p>
				<p className = "text-left" >
					<a href=".#">Cursor Education School</a> - Front-End Education program. February 2019 - June 2019.
				</p>
				<p className="text-left">
					<a href=".#">EasyCode School</a> - Frontend program. September 2018 - December 2018.
				</p>				
			</div>																					
		</div>			
		)
	}
}
export default Courses;