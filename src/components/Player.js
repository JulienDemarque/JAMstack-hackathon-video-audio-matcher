import React from 'react';

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
				<video
					id="video-element"
					controls
					muted
					controlsList="nodownload nofullscreen noremoteplayback"
					width="480"
					height="270"
				>
					<source src={this.props.video} type="video/mp4" />
					<audio id="audio-element">
						<source src={this.props.audio} type="audio/mpeg" />
					</audio>
				</video>
			</div>
		);
	}
}

export default Player;
