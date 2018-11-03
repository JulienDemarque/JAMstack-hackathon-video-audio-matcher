import React from 'react';
import { SongListItem } from '../styles/songlist';

const SongList = ({ songs, updateAudioUrl }) => {
	function handleOnClick(url) {
		updateAudioUrl(url);
	}

	return (
		<div>
			<p>Choose your song by clicking on it</p>
			{songs.map(({ title, url }) => (
				<SongListItem
					url={url}
					title={title}
					onClick={() => handleOnClick(url)}
					key={title}
				>
					<p>{`title: ${title}`}</p>
					<p>{`url: ${url}`}</p>
				</SongListItem>
			))}
		</div>
	);
};

export default SongList;
