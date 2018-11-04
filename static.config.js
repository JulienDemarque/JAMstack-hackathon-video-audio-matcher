import axios from 'axios';

export default {
	getSiteData: () => ({
		title: 'React Static',
	}),
	getRoutes: async () => {
		const { data: posts } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
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
				component: 'src/containers/CreateSong',
			},
			{
				path: '/blog',
				component: 'src/containers/Blog',
				getData: () => ({
					posts,
				}),
				children: posts.map(post => ({
					path: `/post/${post.id}`,
					component: 'src/containers/Post',
					getData: () => ({
						post,
					}),
				})),
			},
			{
				is404: true,
				component: 'src/containers/404',
			},
		];
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
