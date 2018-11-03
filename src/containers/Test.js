import React from 'react';
import Input from '../components/Input';
import Player from '../components/Player';
import GetDataFromHasura from '../components/Query';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchGenre: '' };

		this.upDateSearchGenre = this.upDateSearchGenre.bind(this);
	}

	upDateSearchGenre(genre) {
		this.setState({ searchGenre: genre });
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
				<Player audio="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/songs/oriental/light-in-babylon-belev-shalem.mp3" video="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4"/>
				<Input upDateSearchGenre={this.upDateSearchGenre} />
				{this.state.searchGenre ? (
					<div>
						<h3>Genre Match: {this.state.searchGenre}</h3>
						<GetDataFromHasura keyword={this.state.searchGenre} />
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}

export default Test;
