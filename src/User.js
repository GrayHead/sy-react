import {useDispatch} from 'react-redux';

export default function User({item}) {

	let dispatch = useDispatch();
	let onDeleteUser = (e) => {
		dispatch({type: 'DEL', payload: {id: item.id}});

	};
	return (
		<div>
			{item.id}- {item.name}-
			<button onClick={onDeleteUser}>delete</button>

		</div>
	);
}
