import personsReducer from './reducers/personsReducer'
import mainReducer from './reducers/mainReducer'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
	main: mainReducer,
	persons: personsReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})
