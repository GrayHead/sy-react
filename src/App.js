import React, {Component} from 'react';
import UsersComponent from './components/user/all-users/UsersComponent';
import UserService from './services/userService';
import './App.css';
import FullUser from './components/user/full-user/FullUser';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

class App extends Component {


	render() {

		return (
			<div className='target'>
				<Router>
					<div>
						<Link to={'/users'}>to users</Link>
					</div>
					<div>
						<Link to={'/posts'}>to posts</Link>
					</div>

					<hr/>
					<Switch>
						{/*<Route path={'/users'}>*/}
						{/*	<UsersComponent/>*/}
						{/*</Route>*/}

						<Route path={'/users'}>

							<UsersComponent/>
						</Route>

						{/*<Route path={'/users'} component={UsersComponent}/>*/}


						<Route path={'/posts'} render={() => (<div>all posts</div>)}>

						</Route>

					</Switch>
					<hr/>
				</Router>
			</div>
		);
	}


}

export default App;
