export type PostType = {
	id: number;
	attributes: {
		slug: string;
		title: string;
		author: string;
		postTime: string;
		body: string;
		coverUrl: string;
		coverSmallUrl: string;
	};
};
