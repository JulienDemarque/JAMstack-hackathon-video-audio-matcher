import React from 'react';
import Input from '../components/Input';
import Player from '../components/Player';
import GetDataFromHasura from '../components/Query';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchGenre: '',
			audioUrl: '',
			videoUrl: '',
		};

		this.upDateSearchGenre = this.upDateSearchGenre.bind(this);
		this.updateVideoUrl = this.updateVideoUrl.bind(this);
		this.updateAudioUrl = this.updateAudioUrl.bind(this);
	}

	upDateSearchGenre(genre) {
		this.setState({
			searchGenre: genre,
		});
	}

	updateVideoUrl(url) {
		this.setState({
			videoUrl: url,
		});
	}

	updateAudioUrl(url) {
		this.setState({
			audioUrl: url,
		});
	}

	render() {
		return (
			<div>
				<h1>Test page</h1>
				<p>
					Try with the following links:
					<br />
					https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4
					<br />
					https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Istanbul.mp4
					<br />
					https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/coffe.mp4
					<br />
					https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/traffic.mp4
					<br />
				</p>
				<Input
					upDateSearchGenre={this.upDateSearchGenre}
					updateVideoUrl={this.updateVideoUrl}
				/>
				<Player audio={this.state.audioUrl} video={this.state.videoUrl} />

				{this.state.searchGenre ? (
					<div>
						<h3>Genre Match: {this.state.searchGenre}</h3>
						<GetDataFromHasura
							updateAudioUrl={this.updateAudioUrl}
							keyword={this.state.searchGenre}
						/>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}

export default Test;
