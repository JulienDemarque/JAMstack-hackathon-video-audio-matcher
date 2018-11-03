import React from 'react';
import { Query } from 'react-apollo';
import SongList from './SongList';
import gql from 'graphql-tag';

const GetDataFromHasura = ({ keyword, updateAudioUrl }) => {
	const GET_PROFILE = gql`
		{
			audio(where: { genre: { _like: "%${keyword}%" } }) {
				genre
				id
				songs {
					id
					title
					artist
          url
				}
			}
		}
	`;

	return (
		<div>
			<h3>Results:</h3>
			<Query query={GET_PROFILE}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					return (
						<SongList
							updateAudioUrl={updateAudioUrl}
							songs={data.audio[0].songs}
						/>
					);
				}}
			</Query>
		</div>
	);
};

export default GetDataFromHasura;
