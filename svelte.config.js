import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

function handleMarkdownChanges() {
	return {
		name: 'custom-hmr',
		enforce: 'post',
		// HMR
		handleHotUpdate({ file, server }) {
			if (file.endsWith('.md')) {
				console.log('md file changed');

				server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		}
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			plugins: [handleMarkdownChanges()],
			resolve: {
				alias: {
					'@': path.resolve('./src')
				}
			}
		}
	}
};

export default config;
