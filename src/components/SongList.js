import React from 'react';
import { SongListItem } from '../styles/songlist';

const SongList = ({ songs, updateAudioUrl }) => {
	function handleOnClick(url) {
		updateAudioUrl(url);
	}

	return (
		<div className="card">
			<div className="card-body">
				<p>Choose your song by clicking on it</p>
				{songs.map(({ title, url, artist }) => (
					<button
						className="btn btn-outline-primary btn-block"
						title={title}
						onClick={() => handleOnClick(url)}
						key={title}
					>
						<p className="my-1">{`${title
							.split('-')
							.map(e => e[0].toUpperCase() + e.slice(1))
							.join(' ')} - ${artist
							.split('-')
							.map(e => e[0].toUpperCase() + e.slice(1))
							.join(' ')}`}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default SongList;
