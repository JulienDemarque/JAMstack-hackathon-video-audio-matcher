import React from 'react';
import Input from '../components/Input';
import Player from '../components/Player';
import GetDataFromHasura from '../components/Query';
import {
	Layout,
	UrlContainer,
	Instructions,
	GenreSelectContainer,
	ResultContainer,
	VideoAndInputContainer,
} from '../styles/layout';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchGenre: '',
			audioUrl: '',
			videoUrl: '',
			selectGenre: '',
		};

		this.upDateSearchGenre = this.upDateSearchGenre.bind(this);
		this.updateVideoUrl = this.updateVideoUrl.bind(this);
		this.updateAudioUrl = this.updateAudioUrl.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
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

	handleSelectChange(e) {
		this.setState({ selectGenre: e.target.value });
	}

	render() {
		return (
			<Layout>
				<h1>Test page</h1>
				<VideoAndInputContainer>
					<Instructions>
						Don't have your video online yet? try with the following links for
						demo:
					</Instructions>
					<UrlContainer>
						<p>
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
					</UrlContainer>
					<Input
						upDateSearchGenre={this.upDateSearchGenre}
						updateVideoUrl={this.updateVideoUrl}
					/>
					{this.state.videoUrl && (
						<Player audio={this.state.audioUrl} video={this.state.videoUrl} />
					)}
				</VideoAndInputContainer>
				{this.state.searchGenre ? (
					<ResultContainer>
						<GenreSelectContainer>
							<p>
								Genre Match: <em>{this.state.searchGenre}</em>
							</p>
							<p>Or choose an other genre:</p>
							<select
								name="Genre"
								value={this.state.selectGenre}
								onChange={this.handleSelectChange}
							>
								<option value="" disabled selected>
									Select your option
								</option>
								<option value="oriental">oriental</option>
								<option value="jazz">jazz</option>
								<option value="punk-rock">punk-rock</option>
								<option value="ambient">ambient</option>
							</select>
						</GenreSelectContainer>
						<GetDataFromHasura
							updateAudioUrl={this.updateAudioUrl}
							keyword={this.state.selectGenre || this.state.searchGenre}
						/>
					</ResultContainer>
				) : (
					''
				)}
			</Layout>
		);
	}
}

export default Test;
