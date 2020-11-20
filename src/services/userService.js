export default class UserService {

	async getAllUsers() {

		let response = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
		return response;
	}

};



