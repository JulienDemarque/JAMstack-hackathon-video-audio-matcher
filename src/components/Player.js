import React from 'react';

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.audioSrc = this.props.audio;
		this.videoSrc = this.props.video;
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
					<source src={this.videoSrc} type="video/mp4" />
					<audio id="audio-element">
						<source src={this.audioSrc} type="audio/mpeg" />
					</audio>
				</video>
			</div>
		);
	}
}

export default Player;