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
				path: '/test',
				component: 'src/containers/Test',
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
						{renderMeta.styleTags}
					</Head>
					<Body>{children}</Body>
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
