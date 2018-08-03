import { init } from 'sapper/runtime.js';
import { Store } from 'svelte/store.js';
import { manifest } from './manifest/client.js';

init({
	target: document.querySelector('#sapper'),
	manifest,
	store: data => {
		// `data` is whatever was in the server-side store
		return new Store(data);
	}
});