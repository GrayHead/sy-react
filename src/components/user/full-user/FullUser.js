import React, {Component} from 'react';

class User extends Component {


	render() {

		let {user} = this.props;
		return (
			<div>
				{user.id}-{user.name}-{user.email}-{user.username}
			</div>
		);
	}


}

export default User;
