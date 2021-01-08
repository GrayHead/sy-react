import {createStore} from 'redux';

// 1 яейка

// let nums = [11, 22, 33];
// let numsCopy = [nums[0], nums[1], nums[2]];
// let numsCopy = [...nums];

// reducer
let reducer = (state = [{id: 123, name: 'vasya'}], action) => {
	switch (action.type) {
// action -> type : 'ADD', payload : {id : 123, name :'vasya'}
		case 'ADD':
			state.push(action.payload);
			return [...state];
// action -> type : 'DEL', payload : {id :213}
		case 'DEL':
			let filter = state.filter(value => value.id != action.payload.id);
			return [...filter];
		default:
			return state;
	}
};

// store
export let store = createStore(reducer);


