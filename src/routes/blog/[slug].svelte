<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import BlogBody from '@/components/BlogBody/index.svelte';

	export const load: Load = async ({ params, fetch }) => {
		const allPostsResponse = await fetch('/api/posts.json');

		const allPosts: PostType[] = await allPostsResponse.json();

		const postIndex = allPosts.findIndex((post) => post.attributes.slug === params.slug);

		if (postIndex > -1)
			return {
				status: 200,
				props: {
					post: allPosts[postIndex]
				}
			};

		return {
			status: 404
		};
	};
</script>

<script lang="ts">
	import type { PostType } from 'src/types';

	export let post: PostType;
</script>

<div>
	<BlogBody source={post.attributes.body} />
</div>
