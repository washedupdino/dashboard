import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './weather.scss';

const Weather = () => {
	const [weather, setWeather] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const getCurrentWeather = () => {
		axios
			.get(url)
			.then(result => {
				setWeather(result.data);
				setIsLoading(false);
			})
			.catch(err => err);
	};

	useEffect(() => {
		getCurrentWeather();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='weather-container'>
			<div id='weather-img'>
				<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt='' />
			</div>
			<div id='weather-text'>
				<h3>{weather.name}</h3>
				<p>
					{Math.round(weather.main.temp)}
					<span id='degrees'>&deg;C</span>
				</p>
				{/* <small>Feels like: {Math.round(weather.main.feels_like)} &deg;C</small> */}
				<p id='weather-desc'>
					{weather.weather[0].description.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))}
				</p>
			</div>
		</div>
	);
};

export default Weather;
