import React from 'react';
import { withSiteData } from 'react-static';
import { Link } from 'react-static';
import { Container } from '../styles/home';
//
import logoImg from '../logo.png';

export default withSiteData(() => (
	<Container>
		<h2>Welcome to Audio Video Matcher</h2>
		<p>
			This website allows you to quickly found suitable music for your video. It
			is using image recognition on your video to determine a best fitting
			musical genre to it. You can then play the song of your choice along your
			video. Ready to get started? Follow the link: <Link to="/test">Test</Link>
		</p>
	</Container>
));
