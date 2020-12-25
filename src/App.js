import React, {Component} from 'react';
import UsersComponent from './components/user/all-users/UsersComponent';
import './App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class App extends Component {


	render() {

		return (
			<div className='target'>
				<Router>
					{/*<div>*/}
					{/*	<Link to={'/users'}>to users</Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to={'/posts'}>to posts</Link>*/}
					{/*</div>*/}


					<Nav>
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/users">Users</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link href="/posts">Posts</Nav.Link>
						</Nav.Item>
					</Nav>

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
