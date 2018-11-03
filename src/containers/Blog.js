import React from 'react';
import { withRouteData, Link } from 'react-static';
import { Layout } from '../styles/layout';
//

export default withRouteData(({ posts }) => (
	<Layout>
		<h1>It's blog time.</h1>
		<br />
		All Posts:
		<ul>
			{posts.map(post => (
				<li key={post.id}>
					<Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
				</li>
			))}
		</ul>
	</Layout>
));
