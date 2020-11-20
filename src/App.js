import React, {Component} from 'react';
import UsersComponent from './components/user/all-users/UsersComponent';

class App extends Component {


	render() {
		return (
			<div className='target'>
				<UsersComponent/>
			</div>
		);
	}


}

export default App;
