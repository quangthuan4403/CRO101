
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [
		{
			name: "Lau nha",
		},
	],
};

export const todosSlide = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});
export const { addTodos } = todosSlide.actions;
export default todosSlide.reducer;
