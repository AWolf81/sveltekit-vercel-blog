const preprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex')
const mdsvexConfig = require('./mdsvex.config.cjs')
const static = require('@sveltejs/adapter-static')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess(),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: static(),
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
