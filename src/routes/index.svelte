<script lang="ts">
	import Hero from '@/components/HomePageHero/index.svelte';
</script>

<div class="home">
	<Hero />
</div>

<style lang="scss">
	.home {
		@apply px-6 mt-8 flex flex-col flex-1 md:mt-0 md:px-0 md:flex-row md:justify-center md:items-center;
	}
</style>
