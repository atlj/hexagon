<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const theme = writable<'dark' | 'light'>('dark');
</script>
