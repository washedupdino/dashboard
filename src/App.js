import React, { useState } from 'react';
import './styles/style.scss';
import Todos from './components/Todos/Todos';
import StickyBoard from './components/Stickies/StickyBoard';
import ScoreList from './components/Scores/ScoreList';
import Weather from './components/Weather/Weather';

function App() {
	const [theme, setTheme] = useState('dark');

	const handleThemeChange = e => {
		if (e.target.checked) {
			return setTheme('light');
		} else {
			return setTheme('dark');
		}
	};

	return (
		<div className={theme}>
			<header>
				<h1>Mitch's Dashboard</h1>
				{/* <label htmlFor='themeSwitch'>Theme: </label> */}
				{/* <h2 className='headingOuter'>Day/Night Toggle</h2> */}
				<div className='toggle toggle--daynight'>
					<input
						type='checkbox'
						id='toggle--daynight'
						className='toggle--checkbox'
						defaultChecked={false}
						onClick={handleThemeChange}
					/>
					<label className='toggle--btn' htmlFor='toggle--daynight'>
						<span className='toggle--feature'></span>
					</label>
				</div>
				{/* <input type='checkbox' name='themeSwitch' defaultChecked={true} onClick={handleThemeChange} /> */}
			</header>
			<section className='widget-container'>
				<div className='container'>
					<div id='weather' className='widget'>
						<span className='ribbon4'>Weather</span>
						<Weather />
					</div>
					<div id='scores' className='widget'>
						<span className='ribbon4'>NBA Scores</span>
						<ScoreList />
					</div>
					{/* <div id='stickies' className='widget'>
					<StickyBoard />
				</div> */}
					<div id='todos' className='widget'>
						<span className='ribbon5'>Todos</span>
						<Todos />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
