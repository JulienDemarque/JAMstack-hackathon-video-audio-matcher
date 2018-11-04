import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

// ($id: Int!, $title: String!, $artist: String!, $url: String!, $genre_id: $Int!)
const POST_SONG_MUTATION = gql`
	mutation PostSong(
		$title: String!
		$artist: String!
		$url: String!
		$genre_id: Int!
	) {
		insert_songs(
			objects: {
				title: $title
				artist: $artist
				url: $url
				genre_id: $genre_id
			}
		) {
			returning {
				id
				title
				artist
				url
				genre_id
			}
		}
	}
`;

const GET_GENRES = gql`
	query GetGenreIds {
		music_genre {
			id
			name
		}
	}
`;

class CreateSongs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			artist: '',
			url: '',
			genre_id: 0,
			genres: [],
		};
	}

	render() {
		const { title, artist, url, genre_id } = this.state;
		return (
			<div className="row mt-4">
				<div className="col-6 mx-auto">
					<h1>Register your songs here!</h1>
					<form>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								id="title"
								className="form-control"
								value={title}
								onChange={e => this.setState({ title: e.target.value })}
								type="text"
								placeholder="Song title"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="artist">Artist</label>
							<input
								id="artist"
								className="form-control"
								value={artist}
								onChange={e => this.setState({ artist: e.target.value })}
								type="text"
								placeholder="Artist"
							/>
						</div>
						{/* <SelectGenre handleChange={this.handleChange} /> */}
						<Query query={GET_GENRES}>
							{({ loading, error, data }) => {
								if (loading) return 'Loading...';
								if (error) return `Error! ${error.message}`;

								return (
									<div className="form-group">
										<label htmlFor="genre">Select musical genre</label>
										<select
											id="genre"
											className="form-control"
											onChange={e =>
												this.setState({ genre_id: e.target.value })
											}
											value={genre_id}
										>
											<option value="">Genres</option>
											{data.music_genre.map(audio => (
												<option key={audio.id} value={audio.id}>
													{audio.name}
												</option>
											))}
										</select>
									</div>
								);
							}}
						</Query>
						<div className="form-group">
							<label htmlFor="url">Music URL</label>
							<input
								id="url"
								className="form-control"
								value={url}
								onChange={e => this.setState({ url: e.target.value })}
								type="text"
								placeholder="www.mymusicstorage.com/mysong.mp4"
							/>
							<small id="urlHelp" className="form-text text-muted">
								Please submit a url pointing to your music. Ending muss be a
								valid music format
							</small>
						</div>

						<Mutation
							mutation={POST_SONG_MUTATION}
							variables={{ title, artist, url, genre_id: parseInt(genre_id) }}
						>
							{(postMutation, { error }) => {
								console.log(error);
								return (
									<button className="btn btn-primary" onClick={postMutation}>
										Submit
									</button>
								);
							}}
						</Mutation>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateSongs;
