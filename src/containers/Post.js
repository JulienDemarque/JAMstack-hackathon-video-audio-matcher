import React from 'react';
import { withRouteData, Link } from 'react-static';
import { Layout } from '../styles/layout';
//

export default withRouteData(({ post }) => (
	<Layout>
		<Link to="/blog/">{'<'} Back</Link>
		<br />
		<h3>{post.title}</h3>
		<p>{post.body}</p>
	</Layout>
));
