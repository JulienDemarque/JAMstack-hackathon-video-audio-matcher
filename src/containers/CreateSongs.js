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
			<div>
				<div className="">
					<input
						className=""
						value={title}
						onChange={e => this.setState({ title: e.target.value })}
						type="text"
						placeholder="Song title"
					/>
					<input
						className=""
						value={artist}
						onChange={e => this.setState({ artist: e.target.value })}
						type="text"
						placeholder="Artist"
					/>
					{/* <SelectGenre handleChange={this.handleChange} /> */}
					<Query query={GET_GENRES}>
						{({ loading, error, data }) => {
							if (loading) return 'Loading...';
							if (error) return `Error! ${error.message}`;

							return (
								<select
									onChange={e => this.setState({ genre_id: e.target.value })}
									value={genre_id}
								>
									<option value="">Genres</option>
									{data.music_genre.map(audio => (
										<option key={audio.id} value={audio.id}>
											{audio.name}
										</option>
									))}
								</select>
							);
						}}
					</Query>
					<input
						className=""
						value={url}
						onChange={e => this.setState({ url: e.target.value })}
						type="text"
						placeholder="The URL for the link"
					/>
				</div>
				<Mutation
					mutation={POST_SONG_MUTATION}
					variables={{ title, artist, url, genre_id: parseInt(genre_id) }}
				>
					{(postMutation, { error }) => {
						console.log(error);
						return <button onClick={postMutation}>Submit</button>;
					}}
				</Mutation>
			</div>
		);
	}
}

export default CreateSongs;
