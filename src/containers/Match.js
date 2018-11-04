import React from 'react';
import Input from '../components/Input';
import Player from '../components/Player';
import GetDataFromHasura from '../components/Query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Layout,
	UrlContainer,
	Instructions,
	GenreSelectContainer,
	ResultContainer,
	VideoAndInputContainer,
} from '../styles/layout';

class Match extends React.Component {
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
			<div className="row">
				<div className="col">
					<h1 className="text-center display-4 mt-4">Find a Match!!</h1>

					<div className="card text-center">
						<div className="card-body">
							<ul className="list-group">
								<p className="font-weight-bold">
									Submit a url finishing with .mp4, Wait till it loads, choose a
									song, play the video! <br />
									Don't have your video online yet? try with the following links
									for demo:
								</p>
								<li className="list-group-item">
									https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4
								</li>
								<li className="list-group-item">
									https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Istanbul.mp4
								</li>
								<li className="list-group-item">
									https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/coffe.mp4
								</li>
								<li className="list-group-item">
									https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/traffic.mp4
								</li>
							</ul>
							<Input
								upDateSearchGenre={this.upDateSearchGenre}
								updateVideoUrl={this.updateVideoUrl}
							/>
							{this.state.videoUrl && (
								<Player
									audio={this.state.audioUrl}
									video={this.state.videoUrl}
								/>
							)}
						</div>
					</div>

					{this.state.searchGenre ? (
						<div className="row my-4">
							<div className="col-md-6 my-1">
								<div className="card">
									<div className="card-body">
										<p>
											Genre Match: <em>{this.state.searchGenre}</em>
										</p>
										<p>Or choose an other genre:</p>
										<select
											className="form-control"
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
									</div>
								</div>
							</div>
							<GetDataFromHasura
								updateAudioUrl={this.updateAudioUrl}
								keyword={this.state.selectGenre || this.state.searchGenre}
							/>
						</div>
					) : this.state.videoUrl ? (
						<div className="w-100 text-center">
							<FontAwesomeIcon
								style={{ fontSize: '50px', margin: '30px 0' }}
								icon="spinner"
								spin
							/>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default Match;
