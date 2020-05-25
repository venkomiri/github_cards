import React from 'react'
import './ProfileForm.css'
import axios from 'axios'

class ProfileForm extends React.Component{

	state = {
		userName: ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
		this.props.onSubmit(resp.data);
		this.setState(() => ({
			userName: ""
		}))
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}> 
				<input type="text" 
					value={this.state.userName}
					onChange={event => this.setState({userName: event.target.value})} 
					placeholder="GitHub User Name"
					required
				/> 
				<button>Add Card</button>
			</form>
		);
	}
}

export default ProfileForm;