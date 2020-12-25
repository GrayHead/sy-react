import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import UserService from '../../../services/userService';
import './FullUser.css';

class FullUser extends Component {

	state = {user: null};
	userService = new UserService();

	async componentDidMount() {
		let {match: {params: {id}}} = this.props;
		let user = await this.userService.getUser(id);
		this.setState({user});
		console.log(this.state.user);

	}


	render() {
		let {match: {params: {id}}} = this.props;
		let {user} = this.state;
		return (

			<div className="card">
				{user && (

					<div className={'wraper'}>
						<img className="card-img-top"
							 src="https://www.svgrepo.com/show/122119/user-image-with-black-background.svg"/>
						<div className="card-body">
							<h4 className="card-title">{user.name}</h4>
							<p className="card-text">
								{user.id}-{user.email}-{user.username}
							</p>
						</div>
					</div>
				)
				}
			</div>


		);
	}


}

export default withRouter(FullUser);
