import axios from 'axios';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
	getSiteData: () => ({
		title: 'React Static',
	}),
	getRoutes: async () => {
		return [
			{
				path: '/',
				component: 'src/containers/Home',
			},
			{
				path: '/match',
				component: 'src/containers/Match',
			},
			{
				path: '/createsong',
				component: 'src/containers/CreateSongs',
			},
			{
				is404: true,
				component: 'src/containers/404',
			},
		];
	},
	renderToHtml: (render, Comp, meta) => {
		const sheet = new ServerStyleSheet();
		const html = render(sheet.collectStyles(<Comp />));
		meta.styleTags = sheet.getStyleElement();
		return html;
	},
	Document: class CustomHtml extends Component {
		render() {
			const { Html, Head, Body, children, renderMeta } = this.props;

			return (
				<Html>
					<Head>
						<meta charSet="UTF-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link
							rel="stylesheet"
							href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
							integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
							crossorigin="anonymous"
						/>
						<link
							href="https://fonts.googleapis.com/css?family=Roboto:400,900"
							rel="stylesheet"
						/>
						{renderMeta.styleTags}
					</Head>
					<Body>
						{children}
						<script
							src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
							integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
							crossorigin="anonymous"
						/>
						<script
							src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
							integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
							crossorigin="anonymous"
						/>
						<script
							src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
							integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
							crossorigin="anonymous"
						/>
					</Body>
				</Html>
			);
		}
	},
	// webpack: (config, { defaultLoaders }) => {
	//   config.module.rules = [
	//     {
	//       oneOf: [
	//         {
	//           test: /\.json$/,
	//           use: [{ loader: 'json-loader' }],
	//         },
	//         defaultLoaders.jsLoader,
	//         defaultLoaders.cssLoader,
	//         defaultLoaders.fileLoader,
	//       ],
	//     },
	//   ]
	//   return config
	// },
};
