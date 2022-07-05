import type { PostType } from '@/types';
import TestPostBody from './test.md?raw';

export const testPost: PostType = {
	id: 0,
	attributes: {
		author: 'Burak Guner',
		title: 'Test Post',
		body: TestPostBody,
		coverSmallUrl: 'https://i.imgur.com/iSqMW6p.jpeg',
		coverUrl: 'https://i.imgur.com/iSqMW6p.jpeg',
		postTime: '2020-01-01T00:00:00.000Z',
		slug: 'test'
	}
};
