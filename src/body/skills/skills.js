import React from 'react';
import './skills.css';
import logo from '../../icons/skills.png'


class Skills extends React.Component {
	render() {
		return (
			<div className = "section skills">
			<div className = "projects_wrap">				
				<img src={logo} alt="logo.png"/>
				<h1 className="text-uppercase">SKILLS</h1>
			</div>
			<div className="skills-wrap">
				<div className="item">
					<h3 className="level-title">HTML5</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="100%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">CSS3</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="90%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">ES6</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="50%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">React</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="50%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">NPM</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="75%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">GULP</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="70%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">SASS</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="85%"></div>
					</div>
				</div>
				<div className="item">
					<h3 className="level-title">GIT</h3>
					<div className="level-bar">
						<div className="level-bar-inner" data-level="80%"></div>
					</div>
				</div>
			</div>											
		</div>				
		)
	}
}
export default Skills;

