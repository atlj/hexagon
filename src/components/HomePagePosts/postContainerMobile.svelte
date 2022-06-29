<script lang="ts">
	import './postContainerMobile.scss';
	import type { PostType } from '@/types';
	import Post from './post.svelte';

	export let posts: PostType[];
</script>

<ul>
	{#each posts as post}
		<Post {post} />
	{/each}
</ul>
