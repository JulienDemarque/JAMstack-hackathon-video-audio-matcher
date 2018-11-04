import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';
//
import { ApolloProvider } from 'react-apollo';
import client from './connectors/apollo';
//
import Header from './components/Header';
import './app.css';

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<div>
				<Header />
				<div className="container">
					<Routes />
				</div>
			</div>
		</Router>
	</ApolloProvider>
);

export default hot(module)(App);
