<script lang="ts">
	import prism from 'prismjs';
	import './prism.scss';
	export let lang: undefined | string = undefined;
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
