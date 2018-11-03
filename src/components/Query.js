import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GetDataFromHasura = ({ keyword }) => {
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

					console.log(data.audio[0]);
					return data.audio[0].songs.map(({ title, url }) => (
						<div key={title}>
							<p>{`title: ${title}`}</p>
							<p>{`url: ${url}`}</p>
						</div>
					));
				}}
			</Query>
		</div>
	);
};

export default GetDataFromHasura;
