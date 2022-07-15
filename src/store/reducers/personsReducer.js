const INITIAL_STATE = {
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

const changePersonSalary = (state, { personId, newSalary }) => {
	const newPersons = [...state.persons]
	const index = newPersons.findIndex((el) => el.id === personId)
	newPersons[index].salary = newSalary

	return {
		...state,
		persons: [...newPersons],
	}
}

export const personsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_SALARY_RANDOMLY':
			return changePersonSalary(state, action.payload)
		default:
			return state
	}
}
