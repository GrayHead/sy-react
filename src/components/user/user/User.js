import React, {Component} from 'react';
import './User.css';

class User extends Component {
	state = {
		cls: ''
	};


	render() {
		let {cls} = this.state;
		let {user, getSingleUserById} = this.props;
		return (
			<div className={cls}>
				{
					(user.id % 2 === 0 ? <div>{user.id} - {user.name}</div> : <div><b>{user.id} - {user.name}</b></div>)
				}
				<button onClick={() => getSingleUserById(user.id)}>details</button>
			</div>
		);
	}

	changeColor = () => {
		this.setState({cls: 'user-box'});
	};

}

export default User;
