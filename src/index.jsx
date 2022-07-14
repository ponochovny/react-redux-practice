import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_SALARY_RANDOMLY':
			return changePersonSalary(state, action.payload)
		default:
			return state
	}
}

let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
