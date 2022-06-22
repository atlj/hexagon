<script>
	import '../style/index.scss';
	import { theme } from '@/store/theme.svelte';
	import { onMount } from 'svelte';
	import Header from '@/components/Header/index.svelte';

	onMount(() => {
		theme.subscribe((value) => {
			const body = document.body;
			if (value === 'dark') {
				body.classList.add('dark');
				body.style.backgroundColor = '#1C1A1D';
			} else {
				body.classList.remove('dark');
				body.style.backgroundColor = 'white';
			}
		});
	});
</script>

<svelte:head />

<div class="app">
	<Header />
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}
</style>
