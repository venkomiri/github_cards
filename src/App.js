import React from 'react';
import './App.css'
import Cards from './Cards'
import ProfileForm from './ProfileForm'

class App extends React.Component{

	state = {
		profiles: []
	};

	addNewProfile = (profileData) => {
		this.setState((prevState) => ({
			profiles: [profileData, ...prevState.profiles]
		}));
	}

	render(){

		return (
			<div>
				<div className="header"> The Github Cards App </div>
				<ProfileForm onSubmit={this.addNewProfile}/>
				<Cards profiles={this.state.profiles}/>
			</div>
		);
	}
}

export default App