<script>
	import '../style/index.scss';
	import { theme } from '@/store/theme.svelte';
	import { onMount } from 'svelte';

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

		theme.subscribe(function writeToLocalStorage(newValue) {
			localStorage.setItem('theme', newValue);
		});
	});
</script>

<svelte:head />

<div>
	<slot />
</div>
