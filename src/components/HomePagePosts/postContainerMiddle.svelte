<script lang="ts">
	import './postContainerMiddle.scss';
	import type { PostType } from '@/types';
	import Post from './post.svelte';
	import ChevronDown from './chevronDown.svelte';

	export let posts: PostType[];

	function scroll() {}
</script>

<div class="posts">
	<div class="posts__container">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
	{#if posts.length > 5}
		<ChevronDown onClick={scroll} />
	{/if}
</div>
