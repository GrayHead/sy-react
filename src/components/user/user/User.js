import React, {Component} from 'react';
import './User.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class User extends Component {
	state = {
		cls: ''
	};


	render() {

		let {cls} = this.state;
		let {user, match: {path}} = this.props;

		return (
			<div className={cls}>
				{
					(user.id % 2 === 0 ? <div>{user.id} - {user.name}</div> : <div><b>{user.id} - {user.name}</b></div>)
				}
				<Link to={`${path}/${user.id}`}>to full info</Link>
			</div>
		);
	}

	changeColor = () => {
		this.setState({cls: 'user-box'});
	};

}

export default withRouter(User);
