import React, {Component} from 'react';
import UserService from '../../../services/userService';
import User from '../user/User';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import FullUser from '../full-user/FullUser';

class UsersComponent extends Component {

	userService = new UserService();

	state = {users: []};

	async componentDidMount() {
		let value = await this.userService.getAllUsers();
		this.setState({users: value});
	}


	render() {
		let {users} = this.state;
		let {match} = this.props;
		console.log(match);

		return (
			<div>
				{
					users.map(value => (<User user={value} key={value.id}/>))
				}
				<hr/>
				<Switch>
					<Route path={`${match.url}/:id`} render={(props) => {
						let {match: {url}, match} = props;
						return (<FullUser key={url}/>);
					}}>
					</Route>
				</Switch>

				<hr/>

			</div>
		);
	}
}

export default withRouter(UsersComponent);
