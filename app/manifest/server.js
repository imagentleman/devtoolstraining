// This file is generated by Sapper — do not edit it!
import * as route_articles_json from '../../routes/articles/index.json.js';
import index from '../../routes/index.html';
import root from '../../routes/_layout.html';
import error from '../../routes/_error.html';

export const manifest = {
	server_routes: [
		{
			// articles/index.json.js
			pattern: /^\/articles.json\/?$/,
			handlers: route_articles_json,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.html
			pattern: /^\/?$/,
			parts: [
				{ name: "index", component: index }
			]
		}
	],

	root,

	error
};

// this is included for legacy reasons
export const routes = {};