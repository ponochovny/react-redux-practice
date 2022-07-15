import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
	persons: [
		{
			id: 1,
			name: 'Ismail Erenber',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat ut',
			salary: 500,
			picture:
				'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
		},
		{
			id: 2,
			name: 'Bella Berger',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat ut',
			salary: 750,
			picture:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
		},
		{
			id: 3,
			name: 'Arina Solnair',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat ut',
			salary: 700,
			picture:
				'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 4,
			name: 'Bill Norbery',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat ut',
			salary: 1500,
			picture:
				'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
	],
}

const changePersonSalary = (state, { payload: { personId, newSalary } }) => {
	const tempPersons = JSON.parse(JSON.stringify(current(state.persons)))
	const index = tempPersons.findIndex((el) => el.id === personId)
	tempPersons[index].salary = newSalary

	state.persons = [...tempPersons]
}

export const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {
		changeSalaryRandomly: (state, payload) => {
			changePersonSalary(state, payload)
		},
	},
})

export const { changeSalaryRandomly } = personsSlice.actions

export default personsSlice.reducer
