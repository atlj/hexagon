<script lang="ts">
	import './blog.scss';
	import SvelteMarkdown from 'svelte-markdown';
	import CodeComponent from './code.svelte';
	export let source: string;
</script>

<article class="blog-body">
	<SvelteMarkdown
		renderers={{
			code: CodeComponent
		}}
		{source}
	/>
</article>
