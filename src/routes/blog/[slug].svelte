<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

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
	import BlogBody from '@/components/BlogBody/index.svelte';
	import BlogTitle from '@/components/BlogTitle/index.svelte';
	import ReadingTime from 'reading-time/lib/reading-time';

	export let post: PostType;
</script>

<div class="blog-page">
	<div class="blog-container">
		<img class="blog-container__image" src={post.attributes.coverUrl} />
		<BlogTitle
			title={post.attributes.title}
			readingTime={ReadingTime(post.attributes.body).minutes}
			authorName="Burak Güner"
			date={new Date(post.attributes.postTime)}
		/>
		<BlogBody source={post.attributes.body} />
	</div>
</div>

<style lang="scss">
	.blog-page {
		@apply items-center flex flex-col;
	}

	.blog-container {
		@apply md:w-[623px] mx-4;

		&__image {
			@apply w-full h-auto rounded-xl mb-8 md:mb-9;
		}
	}
</style>
