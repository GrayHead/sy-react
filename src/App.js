import {useDispatch, useSelector} from 'react-redux';
import User from './User';
import {createRef} from 'react';

export default function App() {
	let store = useSelector((store) => store);
	let dispatch = useDispatch();



	let onUserSave = (e) => {
		e.preventDefault();
		console.log(e);
		let username = e.target[0].value;
		// save to store
		let action = {
			type: 'ADD',
			payload: {
				id: new Date().getTime(),
				name: username
			}
		};
		dispatch(action);


	};


	return (

		<div>
			<form onSubmit={onUserSave}>
				<input type="text"/>
				<button>save</button>

			</form>

			{store.map(user => <User key={user.id} item={user}/>)}

		</div>
	);
}
