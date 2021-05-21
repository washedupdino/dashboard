import React from 'react';
import moment from 'moment';

const Score = ({ id, hTeam, vTeam, hTeamScore, vTeamScore, gameTime }) => {
	const time = moment.utc(gameTime).local().format('hh:mm');
	if (!vTeamScore || !hTeamScore) {
		vTeamScore = '-';
		hTeamScore = '-';
	}
	return (
		<div id='game'>
			<div id='teams'>
				<p>{hTeam}</p>
				<p>{vTeam}</p>
			</div>
			<div id='team-scores'>
				<p>{hTeamScore}</p>
				<p>{vTeamScore}</p>
			</div>
			<div id='game-time'>
				<p>{time}</p>
			</div>
		</div>
	);
};

export default Score;
