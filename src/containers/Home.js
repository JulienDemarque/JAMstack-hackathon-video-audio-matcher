import React from 'react';
import { withSiteData } from 'react-static';
import { Link } from 'react-static';
import { Layout } from '../styles/layout';
//
import logoImg from '../logo.png';

export default withSiteData(() => (
	<div className="jumbotron text-center mt-3">
		<h1 className="display-4">Welcome to Audio Video Matcher</h1>
		<p className="lead">
			Are you looking for the perfect song to fit to your video?{' '}
		</p>
		<hr className="my-4" />
		<p className="px-4">
			This website allows you to quickly found suitable music for your video.
			You can then play the song of your choice along your video.
			<br />
			<br />
			How does it work? It is using image recognition on your video to determine
			a best fitting musical genre to it. For exemple if your video has trees
			and campfire it will likely match to folk music!
			<br />
			<br />
			Ready to get started? Follow the link:
		</p>
		<Link className="btn btn-primary btn-lg" to="/match">
			Match
		</Link>
	</div>
));
