<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const theme = writable<'dark' | 'light'>('dark', (set) => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark' || savedTheme === 'light') {
			set(savedTheme);
		}
	});
</script>
