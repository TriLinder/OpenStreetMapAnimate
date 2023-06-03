import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['@popperjs/core'] // https://github.com/sveltejs/kit/issues/2161#issuecomment-1252026388
	}
});