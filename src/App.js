import React, {Component} from 'react';
import UsersComponent from './components/user/all-users/UsersComponent';
import UserService from './services/userService';
import './App.css';
import FullUser from './components/user/full-user/FullUser';

class App extends Component {

	userService = new UserService();
	state = {users: [], user: null};


	async componentDidMount() {
		let allUsers = await this.userService.getAllUsers();
		console.log(allUsers);
		this.setState({users: allUsers});
	}

	getSingleUserById = (id) => {
		let {users} = this.state;
		let user = users.find(user => user.id === id);
		this.setState({user});
	};

	render() {
		let {user} = this.state;
		return (
			<div className='target'>

				<div><UsersComponent users={this.state.users} getSingleUserById={this.getSingleUserById}/></div>
				{user && (<div><FullUser user={this.state.user}/></div>)}
			</div>
		);
	}


}

export default App;
