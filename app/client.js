import { init } from 'sapper/runtime.js';
import { Store } from 'svelte/store.js';
import { manifest } from './manifest/client.js';

init({
	target: document.querySelector('#sapper'),
	manifest,
	store: data => {
		// `data` is whatever was in the server-side store
		const store = new Store(data);

		store.compute(
			'score',
			['done', 'articles'],
			(done, articles) => {
				const doneKeys = Object.keys(done);
				const articlesLength = articles ? articles.filter(article => article.exercise !== false).length : 1;
				let finished = 0;

				if (done && doneKeys.length) {
					finished = doneKeys.filter(doneKey => done[doneKey].finished).length;
				}

				return parseInt(finished / articlesLength * 100);
			}
		);

		return store;
	}
});