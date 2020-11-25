import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import UserService from '../../../services/userService';

class User extends Component {

	state = {user: null};
	userService = new UserService();

	async componentDidMount() {
		let {match: {params: {id}}} = this.props;
		let user = await this.userService.getUser(id);
		this.setState({user});

	}


	render() {
		let {match: {params: {id}}} = this.props;
		let {user} = this.state;
		return (
			<div>
				{user && <div>{user.id}-{user.name}</div>}


			</div>
		);
	}


}

export default withRouter(User);
