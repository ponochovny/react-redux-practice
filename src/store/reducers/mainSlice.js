import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isModalOpened: false,
}

export const mainSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {
		modalState: (state, payload) => {
			state.isModalOpened = payload.payload.value
		},
	},
})

export const { modalState } = mainSlice.actions

export default mainSlice.reducer
