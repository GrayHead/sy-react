import React, {Component} from 'react';
import User from '../user/User';

class UsersComponent extends Component {


	render() {

		let {users, getSingleUserById} = this.props;
		console.log(users);
		return (
			users.map(value => (<User key={value.id} user={value} getSingleUserById={getSingleUserById}/>))
		);
	}
}

export default UsersComponent;
