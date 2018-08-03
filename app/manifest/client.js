// This file is generated by Sapper — do not edit it!
import root from '../../routes/_layout.html';
import error from '../../routes/_error.html';

const index = () =>
	import(/* webpackChunkName: "index" */ '../../routes/index.html');

export const manifest = {
	ignore: [/^\/articles.json\/?$/],

	pages: [
		{
			// index.html
			pattern: /^\/?$/,
			parts: [
				{ component: index }
			]
		}
	],

	root,

	error
};

// this is included for legacy reasons
export const routes = {};