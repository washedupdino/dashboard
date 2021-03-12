import React, { useReducer, useState, useEffect } from 'react';
import './styles/style.css';

// const initialTheme = 'dark';

// const themeReducer = (state, action) => {
// 	switch (action) {
// 		case true:
// 			return {
// 				...state,
// 				theme: 'dark',
// 			};
// 		case false:
// 			return {
// 				...state,
// 				theme: 'light',
// 			};
// 		default:
// 			throw new Error();
// 	}
// };

function App() {
	const [theme, setTheme] = useState('dark');

	const handleThemeChange = e => {
		if (e.target.checked) {
			return setTheme('dark');
		} else {
			return setTheme('light');
		}
	};

	return (
		<div className={theme}>
			<header>
				<h1>Mitch's Dashboard</h1>
				<label htmlFor='themeSwitch'>Theme: </label>
				<input type='checkbox' name='themeSwitch' onClick={handleThemeChange} />
			</header>
			<section className='container'>
				<div id='weather' className='widget'>
					<h2>Weather</h2>
				</div>
				<div id='scores' className='widget'>
					<h2>NBA Scores</h2>
				</div>
				<div id='stickies' className='widget'>
					<h2>Stickies</h2>
				</div>
				<div id='todos' className='widget'>
					<h2>Todos</h2>
				</div>
			</section>
		</div>
	);
}

export default App;
