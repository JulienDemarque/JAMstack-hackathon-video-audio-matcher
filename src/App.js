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
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

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
