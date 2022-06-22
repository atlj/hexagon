<script lang="ts">
	import Logo from './Logo.svelte';
	import ThemeButton from './ThemeButton.svelte';
</script>

<section class="header">
	<div />
	<Logo />
	<ThemeButton />
</section>

<style>
	.header {
		@apply flex p-2 justify-between md:px-6;
	}
</style>
