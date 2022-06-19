<script lang="ts">
	import prism from 'prismjs';
	import './prism.scss';
	export let lang: string | undefined;
	export let text: string;
</script>

{#if !lang}
	<code class="non-prism">
		{text}
	</code>
{:else}
	<div class="prism">
		<pre><code class="prism__code">{@html prism.highlight(text, prism.languages[lang])}</code></pre>
	</div>
{/if}

<style lang="scss">
	.non-prism {
		@apply bg-gray-200  rounded-md p-px;
	}
</style>
