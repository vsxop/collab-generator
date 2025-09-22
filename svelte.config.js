// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
		paths: {
      base: process.env.NODE_ENV === 'production' ? '/collab-generator' : ''
    }
	}
};

export default config;
