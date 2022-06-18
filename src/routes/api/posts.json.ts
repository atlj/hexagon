import type { RequestHandler } from '@sveltejs/kit';
import type { PostType } from 'src/types';

export const get: RequestHandler = async () => {
	const response = await fetch(import.meta.env.VITE_API_URL + '/posts');

	const data: PostType[] = (await response.json()).data;

	return {
		status: 200,
		body: data
	};
};
