import personsReducer from './reducers/personsSlice'
import mainReducer from './reducers/mainSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
	main: mainReducer,
	persons: personsReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})
