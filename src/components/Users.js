import {useEffect, useState} from 'react';
import User from './User';

export default function Users() {


	// state & setState analogue
	let [users, setUsers] = useState([]);
	let [counter, setCounter] = useState(1);


	// fetch; [] -> useEffect === componentDidMount
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(value => value.json())
	// 		.then(value => {
	// 			setUsers(value);
	// 		});
	// 	console.log('use effect cdm');
	//
	// }, []);


	//  [a,b,c] -> useEffect === componentDidUpdate

	useEffect(() => {
			fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
				.then(value => value.json())
				.then(user => {
					users.push(user);
					setUsers(users);
				});


		}, [counter]
	);


	return (
		<div>

			<button onClick={() => {
				setCounter((c) => c + 1);
				console.log(counter);
			}}>+
			</button>
			<div>
				{users.map(value => <User item={value}/>)}

			</div>

		</div>
	);
}
