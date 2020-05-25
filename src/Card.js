import React from 'react'
import './Card.css'

class Card extends React.Component{

	render(){
		return (

			<div className="github-profile">
				<img className="profile_pic" src={this.props.avatar_url} alt="image not found"/> 
				<span className="info">
					<div className="name">{this.props.name}</div>
					<div className="company">{this.props.company}</div>
				</span>
			</div>
		);
	}
}

export default Card