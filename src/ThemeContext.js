import {createContext, useReducer} from "react";

export const ThemeContext = createContext()

const initialState = {darkMode: false}

const themeReducer = (state, action) => {
	switch (action.type) {
		case "LIGHT_MODE":
			return {darkMode: false}
		case "DARK_MODE":
			return {darkMode: true}
		default:
			return state
	}
}


export default function ThemeProvider(props) {
	const [state, dispatch] = useReducer(themeReducer, initialState)
	return <ThemeContext.Provider value={{state, dispatch}}>
		{props.children}
	</ThemeContext.Provider>
}
