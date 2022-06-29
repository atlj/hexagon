<script lang="ts" context="module">
	export const load: Load = async ({ fetch }) => {
		const allPostsResponse = await fetch('/api/posts.json');

		const allPosts: PostType[] = await allPostsResponse.json();

		if (allPosts)
			return {
				status: 200,
				props: {
					posts: [...allPosts]
				}
			};

		return {
			status: 404
		};
	};
</script>

<script lang="ts">
	import Hero from '@/components/HomePageHero/index.svelte';
	import Posts from '@/components/HomePagePosts/index.svelte';
	import Divider from '@/components/Divider/index.svelte';
	import type { PostType } from '@/types';

	import type { Load } from '@sveltejs/kit';

	export let posts: PostType[];
</script>

<div class="home">
	<Hero />
	<Divider />
	<Posts {posts} />
</div>

<style lang="scss">
	.home {
		@apply px-6 mt-8 flex gap-6 md:gap-24 flex-col flex-1 md:mt-0 md:px-0 md:flex-row md:justify-center md:items-center;
	}
</style>
