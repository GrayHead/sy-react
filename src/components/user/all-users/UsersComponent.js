import React, {Component} from 'react';
import User from '../user/User';

class UsersComponent extends Component {

	state = {
		users: []
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(value => {
				this.setState({users: value});
			});
	}


	render() {
		let {users} = this.state;
		return (
			users.map(value => (<User key={value.id} user={value}/>))
		);
	}
}

export default UsersComponent;
