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
				'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg',
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
	personToChange: null,
}

const changeRandomPersonSalaryFunc = (state, { payload: { newSalary } }) => {
	const tempPersons = JSON.parse(JSON.stringify(current(state.persons)))
	tempPersons[[Math.floor(Math.random() * tempPersons.length)]].salary =
		newSalary

	state.persons = [...tempPersons]
}

const changePersonDataFunc = (state, { payload: person }) => {
	const tempPersons = JSON.parse(JSON.stringify(current(state.persons)))
	const index = tempPersons.findIndex((el) => el.id === person.id)
	tempPersons[index] = { ...person }

	state.persons = [...tempPersons]
}

export const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {
		changeRandomPersonSalary: (state, payload) => {
			changeRandomPersonSalaryFunc(state, payload)
		},
		setPersonDataToChange: (state, payload) => {
			state.personToChange = { ...payload.payload }
		},
		changePersonData: (state, payload) => {
			changePersonDataFunc(state, payload)
		},
		clearPersonDataToChange: (state) => {
			state.personToChange = null
		},
	},
})

export const {
	changeRandomPersonSalary,
	setPersonDataToChange,
	clearPersonDataToChange,
	changePersonData,
} = personsSlice.actions

export default personsSlice.reducer
