import React from 'react';
import './App.css';
import Careerprofile from '../Careerprofile/Careerprofile';
import Experiences from '../body/experiences/experiences'
import Courses from '../body/Courses/courses'
import Skills from '../body/skills/skills'
import Addinfo from '../body/addinfo/addinfo'

class App extends React.Component {

	render() {
		return (			
			<div className="App">
				<div className="wrapper">
					<div className="sidebar-wrapper">
						<Addinfo />
					</div>
					<div className="main-wrapper">
						<Careerprofile />
						<Experiences / >
						<Courses / >
						<Skills />		
					</div>					
				</div>
			</div>		
		)
	}
}

export default App;