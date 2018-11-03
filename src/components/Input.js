import React from 'react';
import Clarifai from 'clarifai';
import GenreToDescriptive from '../utils/genre-to-descriptive';

const app = new Clarifai.App({
	apiKey: '85c245c94f054d909333a497016a9a92',
});

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let url = this.state.input;
		this.recognitionWithClarifai(url);
		this.setState({ input: '' });
		//displayVideo(url);
	}

	findBestMatch(matches) {
		let bestMatch = '';
		let numberOfMatches = 0;
		for (let key in matches) {
			if (matches[key] > numberOfMatches) {
				bestMatch = key;
				numberOfMatches = matches[key];
			}
		}
		//we will need to handle the No Match properly later
		return bestMatch || 'no match!!';
	}

	recognitionWithClarifai(url) {
		app.models
			.predict(Clarifai.GENERAL_MODEL, url, { video: true })
			.then(response => {
				let conceptsOfVideo = this.reduceAPIresponseToOneArray(response);
				//console.log(conceptsOfVideo);
				let matches = this.showMatch(conceptsOfVideo, GenreToDescriptive);
				//displayMatches(matches);
				let bestMatch = this.findBestMatch(matches);
				this.props.upDateSearchGenre(bestMatch);
			})
			.catch();
	}

	reduceAPIresponseToOneArray(response) {
		let frames = response.outputs[0].data.frames.map(frame => {
			return frame.data.concepts;
		});
		let conceptsPerFrame = frames.map(frame => {
			let frameConcepts = [];
			frame.forEach(concept => frameConcepts.push(concept.name));
			return frameConcepts;
		});
		let conceptsOfVideo = [];
		conceptsPerFrame.forEach(frame => {
			frame.forEach(concept => {
				if (!conceptsOfVideo.includes(concept)) {
					conceptsOfVideo.push(concept);
				}
			});
		});
		return conceptsOfVideo;
	}

	showMatch(conceptsOfVideo, GenreToDescriptive) {
		let matches = {
			oriental: 0,
			jazz: 0,
			rock: 0,
			folk: 0,
			ambient: 0,
		};
		conceptsOfVideo.forEach(concept => {
			GenreToDescriptive.forEach(genre => {
				if (genre.descriptive.includes(concept)) {
					matches[genre.name]++;
				}
			});
		});
		return matches;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="link-input"
						type="text"
						placeholder="put link to your video here"
						value={this.state.input}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Input;
