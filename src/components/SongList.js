import React from 'react';
import { SongListItem } from '../styles/songlist';

const SongList = ({ songs, updateAudioUrl }) => {
	function handleOnClick(url) {
		updateAudioUrl(url);
	}

	return (
		<div>
			<p>Choose your song by clicking on it</p>
			{songs.map(({ title, url, artist }) => (
				<SongListItem
					title={title}
					onClick={() => handleOnClick(url)}
					key={title}
				>
					<p>{`${title
						.split('-')
						.map(e => e[0].toUpperCase() + e.slice(1))
						.join(' ')} - ${artist
						.split('-')
						.map(e => e[0].toUpperCase() + e.slice(1))
						.join(' ')}`}</p>
				</SongListItem>
			))}
		</div>
	);
};

export default SongList;
