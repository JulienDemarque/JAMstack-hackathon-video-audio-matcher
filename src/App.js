import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
// Apollo Client
import { ApolloProvider } from 'react-apollo';
import client from './connectors/apollo';
// Components
import Header from './components/Header';
// Styles
import './app.css';

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<div>
				<Header />
				{/* <nav>
					<Link exact to="/">
						Home
					</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/test">Test</Link>
				</nav> */}
				<div className="content">
					<Routes />
				</div>
			</div>
		</Router>
	</ApolloProvider>
);

export default hot(module)(App);
