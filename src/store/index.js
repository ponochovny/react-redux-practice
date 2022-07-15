import { combineReducers, createStore } from 'redux'
import { personsReducer } from './reducers/personsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
	persons: personsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
