import React, { useState } from 'react';
import Score from './Score';
import moment from 'moment';
import axios from 'axios';

const today = moment().format('YYYY-MM-DD');
// const options = {
// 	method: 'GET',
// 	url: `https://api-nba-v1.p.rapidapi.com/games/date/${today}`,
// 	headers: {
// 		'x-rapidapi-key': '7d705d3e9emshe0b7f383ba09823p1612edjsnba9da2967b0b',
// 		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
// 	},
// };

const allGames = [
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8892',
		startTimeUTC: '2021-03-24T00:00:00.000Z',
		endTimeUTC: '2021-03-24T02:15:00.000Z',
		arena: 'AmericanAirlines Arena',
		city: 'Miami',
		country: 'USA',
		clock: '',
		gameDuration: '2:02',
		currentPeriod: '4/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '3',
		statusGame: 'Finished',
		vTeam: {
			teamId: '28',
			shortName: 'PHX',
			fullName: 'Phoenix Suns',
			nickName: 'Suns',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png',
			score: {
				points: '110',
			},
		},
		hTeam: {
			teamId: '20',
			shortName: 'MIA',
			fullName: 'Miami Heat',
			nickName: 'Heat',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png',
			score: {
				points: '100',
			},
		},
	},
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8174',
		startTimeUTC: '2021-03-24T02:00:00.000Z',
		endTimeUTC: '2021-03-24T04:47:00.000Z',
		arena: 'Chase Center',
		city: 'San Francisco',
		country: 'USA',
		clock: '',
		gameDuration: '2:29',
		currentPeriod: '4/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '3',
		statusGame: 'Finished',
		vTeam: {
			teamId: '27',
			shortName: 'PHI',
			fullName: 'Philadelphia 76ers',
			nickName: '76ers',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png',
			score: {
				points: '108',
			},
		},
		hTeam: {
			teamId: '11',
			shortName: 'GSW',
			fullName: 'Golden State Warriors',
			nickName: 'Warriors',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png',
			score: {
				points: '98',
			},
		},
	},
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8175',
		startTimeUTC: '2021-03-24T02:00:00.000Z',
		endTimeUTC: '2021-03-24T04:29:00.000Z',
		arena: 'Moda Center',
		city: 'Portland',
		country: 'USA',
		clock: '',
		gameDuration: '2:18',
		currentPeriod: '4/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '3',
		statusGame: 'Finished',
		vTeam: {
			teamId: '4',
			shortName: 'BKN',
			fullName: 'Brooklyn Nets',
			nickName: 'Nets',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png',
			score: {
				points: '116',
			},
		},
		hTeam: {
			teamId: '29',
			shortName: 'POR',
			fullName: 'Portland Trail Blazers',
			nickName: 'Trail Blazers',
			logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png',
			score: {
				points: '112',
			},
		},
	},
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8176',
		startTimeUTC: '2021-03-24T23:00:00.000Z',
		endTimeUTC: '',
		arena: 'Bankers Life Fieldhouse',
		city: 'Indianapolis',
		country: 'USA',
		clock: '',
		gameDuration: ':',
		currentPeriod: '0/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '1',
		statusGame: 'Scheduled',
		vTeam: {
			teamId: '10',
			shortName: 'DET',
			fullName: 'Detroit Pistons',
			nickName: 'Pistons',
			logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Detroit_Pistons_logo.svg/1200px-Detroit_Pistons_logo.svg.png',
			score: {
				points: '',
			},
		},
		hTeam: {
			teamId: '15',
			shortName: 'IND',
			fullName: 'Indiana Pacers',
			nickName: 'Pacers',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png',
			score: {
				points: '',
			},
		},
	},
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8177',
		startTimeUTC: '2021-03-24T23:30:00.000Z',
		endTimeUTC: '',
		arena: 'Amalie Arena',
		city: 'Tampa',
		country: 'USA',
		clock: '',
		gameDuration: ':',
		currentPeriod: '0/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '1',
		statusGame: 'Scheduled',
		vTeam: {
			teamId: '9',
			shortName: 'DEN',
			fullName: 'Denver Nuggets',
			nickName: 'Nuggets',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png',
			score: {
				points: '98',
			},
		},
		hTeam: {
			teamId: '38',
			shortName: 'TOR',
			fullName: 'Toronto Raptors',
			nickName: 'Raptors',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png',
			score: {
				points: '106',
			},
		},
	},
	{
		seasonYear: '2020',
		league: 'standard',
		gameId: '8178',
		startTimeUTC: '2021-03-24T23:30:00.000Z',
		endTimeUTC: '',
		arena: 'Fiserv Forum',
		city: 'Milwaukee',
		country: 'USA',
		clock: '',
		gameDuration: ':',
		currentPeriod: '0/4',
		halftime: '0',
		EndOfPeriod: '0',
		seasonStage: '2',
		statusShortGame: '1',
		statusGame: 'Scheduled',
		vTeam: {
			teamId: '2',
			shortName: 'BOS',
			fullName: 'Boston Celtics',
			nickName: 'Celtics',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png',
			score: {
				points: '',
			},
		},
		hTeam: {
			teamId: '21',
			shortName: 'MIL',
			fullName: 'Milwaukee Bucks',
			nickName: 'Bucks',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png',
			score: {
				points: '',
			},
		},
	},
];

const ScoreList = () => {
	// const [gameData, setGameData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const gameData = allGames;
	// axios
	// 	.request(options)
	// 	.then(function (response) {
	// 		setGameData(response.data.api.games);
	// 		setIsLoading(false);
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error);
	// 	});
	const isLoading = false;

	return (
		<div className='scores'>
			{/* <h2>NBA Scores</h2> */}
			{isLoading ? (
				<p>Loading...</p>
			) : (
				gameData.map(game => {
					// if (moment.utc(game.startTimeUTC).local().date() === moment().date()) {
					return (
						<Score
							key={game.id}
							hTeam={game.hTeam.shortName}
							vTeam={game.vTeam.shortName}
							hTeamScore={game.hTeam.score.points}
							vTeamScore={game.vTeam.score.points}
							gameTime={game.startTimeUTC}
						/>
					);
					// } else {
					// return;
					// }
				})
			)}
		</div>
	);
};
export default ScoreList;
