export default function UserComponent(props) {

	let {user} = props;
	return (
		<div>

			<h2>{user.name}</h2>
			<h3>{user.age}</h3>
			<h4>{user.status.toString()}</h4>
			<img src={user.image} alt=""/>
			<hr/>

		</div>
	);

}

