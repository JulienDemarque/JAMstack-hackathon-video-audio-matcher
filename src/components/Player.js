import React from 'react';
import { Video } from '../styles/player';

class Player extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let audio = document.getElementById('audio-element');
		let video = document.getElementById('video-element');
		let timeStateChanged = true;

		video.onplay = function() {
			audio.play();
			if (timeStateChanged) {
				audio.currentTime = video.currentTime;
				timeStateChanged = false;
			}
		};

		video.onpause = function() {
			audio.pause();
			timeStateChanged = true;
		};
	}

	componentDidUpdate() {
		let video = document.getElementById('video-element');
		let audio = document.getElementById('audio-element');
		video.load();
		audio.load();
	}

	render() {
		return (
			<div>
				<Video
					id="video-element"
					controls
					muted
					controlsList="nodownload nofullscreen noremoteplayback"
				>
					<source src={this.props.video} type="video/mp4" />
					<audio id="audio-element">
						<source src={this.props.audio} type="audio/mpeg" />
					</audio>
				</Video>
			</div>
		);
	}
}

export default Player;
