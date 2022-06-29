<script lang="ts">
	import type { PostType } from '@/types';
	import PostContainerMobile from './PostContainerMobile.svelte';
	import './index.scss';
	import PostContainerMiddle from './postContainerMiddle.svelte';

	export let posts: PostType[];
</script>

<div class="post-container">
	BLOG
	<PostContainerMobile {posts} />
	<PostContainerMiddle {posts} />
</div>
