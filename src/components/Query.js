import React from 'react';
import { Query } from 'react-apollo';
import SongList from './SongList';
import { SongContainer } from '../styles/songlist';
import gql from 'graphql-tag';

const GetDataFromHasura = ({ keyword, updateAudioUrl }) => {
	const GET_PROFILE = gql`
		{
			music_genre(where: { name: { _like: "%${keyword}%" } }) {
				id
				name
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
		<SongContainer>
			<Query query={GET_PROFILE}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					return (
						<SongList
							updateAudioUrl={updateAudioUrl}
							songs={data.music_genre[0].songs}
						/>
					);
				}}
			</Query>
		</SongContainer>
	);
};

export default GetDataFromHasura;
