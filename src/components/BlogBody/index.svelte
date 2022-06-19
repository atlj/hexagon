<script lang="ts">
	import './blog.scss';
	import SvelteMarkdown from 'svelte-markdown';
	export let source: string;
</script>

<article class="blog-body">
	<SvelteMarkdown {source} />
</article>
